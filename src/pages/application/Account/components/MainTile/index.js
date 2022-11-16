import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import EditIcon from '@mui/icons-material/Edit';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Icon from 'components/Icon';
import TileWrapper from 'components/TileWrapper';
import { dateFormat } from 'consts/dateFormats';
import commonStyles from '../../styles';
import EditFormView from '../EditForm';
import styles from './styles';

const Property = ({ name, value }) => (
  <Typography variant="h3">
    <Box sx={styles.propertyName}>{`${name}:`}</Box>
    <Box sx={styles.propertyValue}>{value}</Box>
  </Typography>
);

Property.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const MainTileView = ({
  isEditMode,
  isMyAccount,
  firstName,
  lastName,
  toggleEditMode,
  email,
  description,
  mobile,
  birthdate,
  gender,
  onSubmitProfileChanges,
}) => {
  const { t } = useTranslation();

  const initialValues = {
    firstName,
    lastName,
    description,
    email,
    mobile,
    gender,
    birthdate: new Date(),
  };

  const username = `${firstName} ${lastName}`;

  return (
    <TileWrapper sx={styles.mainTile}>
      <Box
        component="img"
        src={require('assets/mockPhoto.jpg')}
        sx={styles.image}
      />

      {!isEditMode ? (
        <Box sx={commonStyles.column}>
          <Box sx={[commonStyles.row, styles.nameAndEditIcon]}>
            <Typography variant="h1">{username}</Typography>
            {isMyAccount && (
              <Icon
                Component={EditIcon}
                onClick={toggleEditMode}
                sx={styles.editIcon}
              />
            )}
          </Box>
          {isMyAccount && <Property name={t('email')} value={email} />}
          {isMyAccount && <Property name={t('mobile')} value={mobile} />}
          <Property name={t('genderLabel')} value={t(`gender.${gender}`)} />
          <Property
            name={t('birthdate')}
            value={format(birthdate, dateFormat)}
          />
          <Property
            name={t('description')}
            value={description || t('noDescription')}
          />
        </Box>
      ) : (
        <EditFormView
          initialValues={initialValues}
          toggleEditMode={toggleEditMode}
          onSubmitProfileChanges={onSubmitProfileChanges}
        />
      )}
    </TileWrapper>
  );
};

MainTileView.propTypes = {
  isEditMode: PropTypes.bool,
  isMyAccount: PropTypes.bool,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  mobile: PropTypes.string,
  birthdate: PropTypes.instanceOf(Date),
  gender: PropTypes.string,
  description: PropTypes.string,
  toggleEditMode: PropTypes.func,
  onSubmitProfileChanges: PropTypes.func,
};

export default MainTileView;
