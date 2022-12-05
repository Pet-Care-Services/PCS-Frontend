import React from 'react';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from 'components/Button';
import DatePicker from 'components/DatePicker';
import FileUpload from 'components/FileUpload';
import Input from 'components/Input';
import Select from 'components/Select';
import getGenderOptions from 'consts/getGenderOptions';
import useDialog from 'hooks/useDialog';
import ChangePasswordView from 'templates/ChangePassword';
import commonStyles from '../../styles';
import styles from './styles';
import getValidation from './validation';

const EditFormView = ({
  initialValues,
  toggleEditMode,
  onSubmitProfileChanges,
}) => {
  const { t } = useTranslation();
  const { openDialog } = useDialog();

  const onChangePasswordClick = () => {
    openDialog({
      content: <ChangePasswordView />,
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitProfileChanges}
      validationSchema={getValidation(t)}
    >
      {({ values }) => (
        <Box component={Form} sx={[commonStyles.column, styles.form]}>
          <Typography variant="h2">{t('editProfile')}</Typography>
          <Box sx={commonStyles.row}>
            <Input name="firstName" label={t('firstName')} />
            <Input name="lastName" label={t('lastName')} />
          </Box>
          <Box>
            <Input multiline name="description" label={t('description')} />
          </Box>
          <Input name="email" label={t('email')} />
          <Input name="mobile" label={t('mobile')} onlyNumbers />
          <Select
            name="gender"
            label={t('genderLabel')}
            options={getGenderOptions(t)}
          />
          <DatePicker
            name="birthdate"
            label={t('birthdate')}
            withTime={false}
            disableFuture
          />
          <Box sx={[commonStyles.row, styles.avatarPasswordButtons]}>
            <FileUpload name="avatar" label={t('chooseAvatar')} />
            <Button small onClick={onChangePasswordClick}>
              {t('changePassword')}
            </Button>
          </Box>
          {values.avatar.file !== null && (
            <Box sx={styles.information}>
              <Typography variant="h4">{t('saveFormToUploadPhoto')}</Typography>
            </Box>
          )}
          <Box sx={[commonStyles.row, styles.formButtons]}>
            <Button color="neutral" onClick={toggleEditMode}>
              {t('cancel')}
            </Button>
            <Button type="submit">{t('save')}</Button>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

EditFormView.propTypes = {
  initialValues: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    description: PropTypes.string,
  }),
  toggleEditMode: PropTypes.func,
  onSubmitProfileChanges: PropTypes.func,
};

export default EditFormView;
