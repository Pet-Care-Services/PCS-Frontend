import React from 'react';
import { FieldArray } from 'formik';
import { get, map } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Select from 'components/Select';
import commonStyles from 'consts/commonStyles';
import optionsShape from 'shapes/optionsShape';
import filterOptionsForNotUsed from 'utils/filterOptionsForNotUsed';
import { initialActivityData } from '../consts';
import styles from '../styles';

const ActivitiesFieldArray = ({ activities, activitiesOptions, errors }) => {
  const { t } = useTranslation();

  return (
    <FieldArray
      name="activities"
      render={(arrayHelpers) => (
        <Box sx={styles.form}>
          {map(activities, (_, index) => {
            const withError = get(errors, `activities[${index}]`);

            return (
              <Box sx={styles.multiFieldLine} key={index}>
                <Select
                  label={t('service')}
                  name={`activities[${index}].id`}
                  options={filterOptionsForNotUsed(
                    activitiesOptions,
                    activities,
                    activities[index]
                  )}
                  sx={styles.field}
                />
                {activities.length > 1 && (
                  <Icon
                    onClick={() => arrayHelpers.remove(index)}
                    Component={DeleteIcon}
                    sx={{
                      ...styles.deleteIcon,
                      ...styles.selfCentered,
                      ...(withError && commonStyles.fixErrorShifting),
                    }}
                  />
                )}
              </Box>
            );
          })}
          {activities.length < activitiesOptions.length && (
            <Button
              onClick={() =>
                arrayHelpers.insert(activities.length, initialActivityData)
              }
              small
            >
              {t('add')}
            </Button>
          )}
        </Box>
      )}
    />
  );
};

ActivitiesFieldArray.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ),
  activitiesOptions: optionsShape,
  errors: PropTypes.object,
};

ActivitiesFieldArray.defaultProps = {
  errors: {},
};

export default ActivitiesFieldArray;
