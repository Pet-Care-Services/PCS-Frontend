import React from 'react';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from 'components/Button';
import Input from 'components/Input';
import useDialog from 'hooks/useDialog';
import ChangePasswordView from 'templates/ChangePassword';
import commonStyles from '../../styles';
import styles from './styles';

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
    <Formik initialValues={initialValues} onSubmit={onSubmitProfileChanges}>
      <Box component={Form} sx={[commonStyles.column, styles.form]}>
        <Typography variant="h2">{t('editProfile')}</Typography>
        <Input name="firstName" label={t('firstName')} />
        <Input name="lastName" label={t('lastName')} />
        <Box>
          <Input multiline name="description" label={t('description')} />
        </Box>
        <Button small onClick={onChangePasswordClick}>
          {t('changePassword')}
        </Button>
        <Box sx={[commonStyles.row, styles.formButtons]}>
          <Button color="neutral" onClick={toggleEditMode}>
            {t('cancel')}
          </Button>
          <Button type="submit">{t('save')}</Button>
        </Box>
      </Box>
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
