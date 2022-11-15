import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import EditIcon from '@mui/icons-material/Edit';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Icon from 'components/Icon';
import TileWrapper from 'components/TileWrapper';
import commonStyles from '../../styles';
import EditFormView from '../EditForm';
import styles from './styles';

const MainTileView = ({
  isEditMode,
  isMyAccount,
  firstName,
  lastName,
  toggleEditMode,
  email,
  description,
  onSubmitProfileChanges,
}) => {
  const { t } = useTranslation();

  const initialValues = {
    firstName,
    lastName,
    description,
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

          <Typography variant="h4">
            {isMyAccount && email}
            {description || t('noDescription')}
          </Typography>
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
  description: PropTypes.string,
  toggleEditMode: PropTypes.func,
  onSubmitProfileChanges: PropTypes.func,
};

export default MainTileView;
