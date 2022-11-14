import React from 'react';
import { Form, Formik } from 'formik';
import { map, noop, range, values } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import EditIcon from '@mui/icons-material/Edit';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Advertisement from 'components/Advertisement';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Input from 'components/Input';
import TileWrapper from 'components/TileWrapper';
import commonStyles from 'consts/commonStyles';
import { ITEM_TYPE } from 'consts/enums';
import useExpandedAdvertisement from 'hooks/useExpandedAdvertisement';
import advertisementsShape from 'shapes/advertisementsShape';
import styles from './styles';
const AccountView = ({
  isMyAccount,
  firstName,
  lastName,
  description,
  email,
  itemType,
  advertisements,
  onSwitchButtonClick,
  onSubmitProfileChanges,
  toggleEditMode,
  isEditMode,
}) => {
  const { t } = useTranslation();
  const { expandedAdvertisementIndex, onAdvertisementClick } =
    useExpandedAdvertisement(advertisements, itemType);

  const username = `${firstName} ${lastName}`;

  const initialValues = {
    firstName,
    lastName,
    description,
  };

  return (
    <Box sx={[styles.root, styles.column]}>
      <Box sx={styles.row}>
        <TileWrapper sx={styles.mainTile}>
          <Box
            component="img"
            src={require('assets/mockPhoto.jpg')}
            sx={styles.image}
          />

          {!isEditMode ? (
            <Box sx={styles.column}>
              <Box sx={[styles.row, styles.nameAndEditIcon]}>
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
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmitProfileChanges}
            >
              <Box component={Form} sx={[styles.column, styles.form]}>
                <Typography variant="h2">{t('editProfile')}</Typography>
                <Input name="firstName" label={t('firstName')} />
                <Input name="lastName" label={t('lastName')} />
                <Box>
                  <Input
                    multiline
                    name="description"
                    label={t('description')}
                  />
                </Box>
                <Box sx={[styles.row, styles.formButtons]}>
                  <Button color="neutral" onClick={toggleEditMode}>
                    {t('cancel')}
                  </Button>
                  <Button type="submit">{t('save')}</Button>
                </Box>
              </Box>
            </Formik>
          )}
        </TileWrapper>
        <Box sx={[styles.column, styles.comments]}>
          <Typography variant="h1">{t('comments')}</Typography>

          {map(range(3), (i) => (
            <Box
              key={i}
              sx={{
                height: 100,
                width: '100%',
                backgroundColor: (theme) => theme.palette.neutral.main,
                border: '1px solid black',
                ...commonStyles.centered,
              }}
            >
              Mocked comment box
            </Box>
          ))}
        </Box>
      </Box>
      <TileWrapper sx={styles.switchButtons}>
        <Box
          onClick={() => onSwitchButtonClick(ITEM_TYPE.REQUEST)}
          sx={[
            styles.switchButton,
            styles.leftSwitchButton,
            itemType === ITEM_TYPE.REQUEST && styles.switchButtonActive,
          ]}
        >
          {t('requests')}
        </Box>
        <Box
          onClick={() => onSwitchButtonClick(ITEM_TYPE.SERVICE)}
          sx={[
            styles.switchButton,
            styles.rightSwitchButton,
            itemType === ITEM_TYPE.SERVICE && styles.switchButtonActive,
          ]}
        >
          {t('services')}
        </Box>
      </TileWrapper>
      <Box sx={[styles.advertisementsWrapper, styles.column]}>
        {map(advertisements, (advertisement, index) => (
          <Advertisement
            key={index}
            {...advertisement}
            belongsToMe={isMyAccount}
            isService={itemType === ITEM_TYPE.SERVICE}
            isExpanded={expandedAdvertisementIndex === index}
            onBoxClick={() => onAdvertisementClick(index)}
            onContactClick={advertisement.onContactClick}
          />
        ))}
      </Box>
    </Box>
  );
};

AccountView.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  description: PropTypes.string,
  email: PropTypes.string,
  isMyAccount: PropTypes.bool,
  itemType: PropTypes.oneOf(values(ITEM_TYPE)),
  advertisements: advertisementsShape,
  onSwitchButtonClick: PropTypes.func,
  onSubmitProfileChanges: PropTypes.func,
  toggleEditMode: PropTypes.func,
  isEditMode: PropTypes.bool,
};

AccountView.defaultProps = {
  description: '',
  email: '',
  isMyAccount: false,
  itemType: ITEM_TYPE.REQUEST,
  advertisements: [],
  onSwitchButtonClick: noop,
  onSubmitProfileChanges: noop,
  toggleEditMode: noop,
  isEditMode: false,
};

export default AccountView;
