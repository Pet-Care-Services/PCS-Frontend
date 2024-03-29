import React from 'react';
import { FieldArray } from 'formik';
import { get, map } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import DeleteIcon from '@mui/icons-material/Delete';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Box } from '@mui/system';
import Button from 'components/Button';
import DatePicker from 'components/DatePicker';
import Icon from 'components/Icon';
import IconCheck from 'components/IconCheck';
import Select from 'components/Select';
import commonStyles from 'consts/commonStyles';
import useBreakpoints from 'hooks/useBreakpoints';
import availabilitiesShape from 'shapes/availabilitiesShape';
import optionsShape from 'shapes/optionsShape';
import { initialAvailabilityData } from '../consts';
import styles from '../styles';

const AvailabilitiesFieldArray = ({
  availabilities,
  periodOptions,
  errors,
}) => {
  const { t } = useTranslation();
  const { isSmallScreen } = useBreakpoints();

  return (
    <FieldArray
      name="availabilities"
      render={(arrayHelpers) => (
        <Box sx={[styles.form, styles.largeGap]}>
          {map(availabilities, (_, index) => {
            const withError = get(errors, `availabilities[${index}]`);

            return (
              <Box
                sx={isSmallScreen ? styles.column : styles.multiFieldLine}
                key={index}
              >
                <DatePicker
                  label={t('from')}
                  name={`availabilities.${index}.from`}
                  sx={styles.dateField}
                />
                <DatePicker
                  label={t('to')}
                  name={`availabilities.${index}.to`}
                  sx={styles.dateField}
                />
                <Box sx={styles.row}>
                  <IconCheck
                    name={`availabilities.${index}.cyclic`}
                    Component={RepeatIcon}
                    sx={{
                      ...styles.selfCentered,
                      ...(withError && commonStyles.fixErrorShifting),
                    }}
                  />
                  {availabilities[index].cyclic && (
                    <Select
                      label={t('repeat')}
                      name={`availabilities.${index}.period`}
                      options={periodOptions}
                      sx={styles.narrowField}
                    />
                  )}
                  {availabilities.length > 1 && (
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
              </Box>
            );
          })}
          <Button
            onClick={() =>
              arrayHelpers.insert(
                availabilities.length,
                initialAvailabilityData
              )
            }
            small
          >
            {t('add')}
          </Button>
        </Box>
      )}
    />
  );
};

AvailabilitiesFieldArray.propTypes = {
  availabilities: availabilitiesShape,
  periodOptions: optionsShape,
  errors: PropTypes.object,
};

AvailabilitiesFieldArray.defaultProps = {
  errors: {},
};

export default AvailabilitiesFieldArray;
