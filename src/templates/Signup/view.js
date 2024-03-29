import React from 'react';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ActionText from 'components/ActionText';
import Button from 'components/Button';
import DatePicker from 'components/DatePicker';
import FileUpload from 'components/FileUpload';
import Input from 'components/Input';
import Loader from 'components/Loader';
import Select from 'components/Select';
import { AVATAR_PLACEHOLDER_PUBLIC_URL } from 'consts/config';
import getGenderOptions from 'consts/getGenderOptions';
import useBreakpoints from 'hooks/useBreakpoints';
import styles from './styles';
import getValidation from './validation';

const SignupView = ({
  onGoToLogin,
  onSubmit,
  isLoading,
  isLoadingAWSSubmit,
  progress,
}) => {
  const { t } = useTranslation();
  const { isExtraSmallScreen } = useBreakpoints();

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
        imageUrl: { localUrl: AVATAR_PLACEHOLDER_PUBLIC_URL, file: null },
      }}
      validationSchema={getValidation(t)}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ values }) => {
        const avatarWithButton = (
          <Box sx={styles.avatarFieldsWrapper}>
            <Box
              component="img"
              src={values.imageUrl.localUrl}
              sx={styles.avatar}
            />
            <FileUpload
              name="imageUrl"
              label={t('chooseAvatar')}
              small={!isExtraSmallScreen}
            />
          </Box>
        );

        return (
          <Box component={Form} sx={styles.root}>
            <Typography variant="h1" sx={styles.headerText}>
              {t('signup')}
            </Typography>
            <Box sx={styles.dualField}>
              <Input name="firstName" label={t('firstName')} />
              <Input name="lastName" label={t('lastName')} />
            </Box>
            <Input name="email" label={t('email')} />
            <Input name="password" type="password" label={t('password')} />
            <Box sx={styles.dualField}>
              <Box sx={styles.leftSideFields}>
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
              </Box>
              {!isExtraSmallScreen && avatarWithButton}
            </Box>
            {isExtraSmallScreen && avatarWithButton}
            <Button type="submit">{t('signup')}</Button>
            {isLoadingAWSSubmit && <Loader progress={progress} />}
            {isLoading && <Loader />}
            <ActionText onClick={onGoToLogin} sx={styles.linkButton}>
              {t('haveAccountAlready')}
            </ActionText>
          </Box>
        );
      }}
    </Formik>
  );
};

SignupView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onGoToLogin: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLoadingAWSSubmit: PropTypes.bool,
  progress: PropTypes.number,
};

SignupView.defaultProps = {
  isLoadingAWSSubmit: false,
  progress: undefined,
};

export default SignupView;
