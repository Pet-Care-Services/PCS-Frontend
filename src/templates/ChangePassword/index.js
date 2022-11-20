import React from 'react';
import { Form, Formik } from 'formik';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { Box, Typography } from '@mui/material';
import Button from 'components/Button';
import Input from 'components/Input';
import useDialog from 'hooks/useDialog';
import useSnackbar from 'hooks/useSnackbar';
import { postChangePassword } from './queries';
import getValidation from './validation';

const ChangePasswordView = () => {
  const { t } = useTranslation();
  const { closeDialog } = useDialog();
  const { openSnackbar } = useSnackbar();

  const { mutate: submitNewPassword } = useMutation(postChangePassword, {
    onSuccess: () => {
      closeDialog();
      openSnackbar(t('yourPasswordHasBeenChanged'));
    },
  });

  const onSubmit = (values) => {
    submitNewPassword(values);
  };

  return (
    <Formik
      initialValues={{ password: '' }}
      onSubmit={onSubmit}
      validationSchema={getValidation(t)}
    >
      <Box
        component={Form}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <Typography variant="h1">{t('changePassword')}</Typography>
        <Input type="password" name="password" label={t('newPassword')} />
        <Box sx={{ display: 'flex', gap: 10 }}>
          <Button onClick={closeDialog} color="neutral">
            {t('cancel')}
          </Button>
          <Button type="submit">{t('save')}</Button>
        </Box>
      </Box>
    </Formik>
  );
};

ChangePasswordView.propTypes = {
  onSubmit: PropTypes.func,
};

ChangePasswordView.defaultProps = {
  onSubmit: noop,
};

export default ChangePasswordView;
