import React from 'react';
import { Form, Formik } from 'formik';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/system';
import Icon from 'components/Icon';
import Input from 'components/Input';
import styles from './styles';

const MessageSender = ({ onSubmit }) => {
  const { t } = useTranslation();

  return (
    <Formik initialValues={{ message: '' }} onSubmit={onSubmit}>
      {({ submitForm }) => (
        <Box component={Form} sx={styles.root}>
          <Icon Component={AddCircleOutlineIcon} size="large" />
          <Input
            name="message"
            label={t('message')}
            shrink={false}
            sx={styles.input}
            small
            rounded
          />
          <Icon Component={SendIcon} onClick={submitForm} size="large" />
        </Box>
      )}
    </Formik>
  );
};

MessageSender.propTypes = {
  onSubmit: PropTypes.func,
};

MessageSender.defaultProps = {
  onSubmit: noop,
};

export default MessageSender;
