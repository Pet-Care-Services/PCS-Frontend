import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ChatIcon from '@mui/icons-material/Chat';
import EditIcon from '@mui/icons-material/Edit';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Icon from 'components/Icon';
import Loader from 'components/Loader';
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
  avatar,
  onSubmitProfileChanges,
  onCreateConversation,
  isLoadingFormSubmit,
  progressAWSSubmit,
  isLoadingAWSSubmit,
}) => {
  const { t } = useTranslation();

  const initialValues = {
    firstName,
    lastName,
    description: description || '',
    email,
    mobile,
    gender,
    birthdate,
    avatar: {
      localUrl: '',
      file: null,
    },
  };

  const username = `${firstName} ${lastName}`;

  return (
    <TileWrapper sx={styles.root}>
      <Box component="img" src={avatar} sx={styles.image} />

      {!isEditMode ? (
        <Box sx={commonStyles.column}>
          <Box sx={[commonStyles.row, styles.nameAndEditIcon]}>
            <Typography variant="h1">{username}</Typography>
            {isMyAccount && (
              <Icon
                Component={EditIcon}
                onClick={toggleEditMode}
                sx={styles.topIcon}
              />
            )}
            {!isMyAccount && (
              <Icon
                Component={ChatIcon}
                onClick={onCreateConversation}
                sx={styles.topIcon}
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
        <Box sx={commonStyles.column}>
          <EditFormView
            initialValues={initialValues}
            toggleEditMode={toggleEditMode}
            onSubmitProfileChanges={onSubmitProfileChanges}
          />
          {isLoadingFormSubmit && <Loader />}
          {isLoadingAWSSubmit && <Loader progress={progressAWSSubmit} />}
        </Box>
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
  avatar: PropTypes.string,
  birthdate: PropTypes.instanceOf(Date),
  gender: PropTypes.string,
  description: PropTypes.string,
  toggleEditMode: PropTypes.func,
  onSubmitProfileChanges: PropTypes.func,
  onCreateConversation: PropTypes.func,
  isLoadingFormSubmit: PropTypes.bool,
  progressAWSSubmit: PropTypes.number,
  isLoadingAWSSubmit: PropTypes.bool,
};

export default MainTileView;
