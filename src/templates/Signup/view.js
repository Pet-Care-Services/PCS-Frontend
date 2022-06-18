import React from 'react';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ActionText from 'components/ActionText';
import Button from 'components/Button';
import DatePicker from 'components/DatePicker';
import Input from 'components/Input';
import Select from 'components/Select';
import getGenderOptions from 'consts/getGenderOptions';
import styles from './styles';
import getValidation from './validation';

const SignupView = ({ onGoToLogin, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobile: '',
        gender: '',
        birthdate: '',
      }}
      validationSchema={getValidation(t)}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Box component={Form} sx={styles.root}>
        <Typography variant="h1">{t('signup')}</Typography>
        <Box sx={styles.dualField}>
          <Input name="firstName" label={t('firstName')} />
          <Input name="lastName" label={t('lastName')} />
        </Box>
        <Input name="email" label={t('email')} />
        <Input name="password" type="password" label={t('password')} />
        <Input name="mobile" label={t('mobile')} onlyNumbers />
        <Select
          name="gender"
          label={t('genderLabel')}
          options={getGenderOptions(t)}
        />
        <DatePicker name="birthdate" label={t('birthdate')} withTime={false} />
        <Button type="submit">{t('signup')}</Button>
        <ActionText onClick={onGoToLogin} sx={styles.linkButton}>
          {t('haveAccountAlready')}
        </ActionText>
      </Box>
    </Formik>
  );
};

SignupView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onGoToLogin: PropTypes.func.isRequired,
};

export default SignupView;
