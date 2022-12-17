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
import getValidation from './validation';

const MessageSender = ({ isConversationChosen, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={onSubmit}
      validationSchema={getValidation(t)}
    >
      {({ submitForm, isValid }) => (
        <Box component={Form} sx={styles.root}>
          <Icon Component={AddCircleOutlineIcon} size="large" />
          <Input
            name="message"
            label={t('message')}
            shrink={false}
            error={null}
            sx={styles.input}
            small
            rounded
          />
          <Icon
            Component={SendIcon}
            onClick={submitForm}
            size="large"
            disabled={!isValid || !isConversationChosen}
          />
        </Box>
      )}
    </Formik>
  );
};

MessageSender.propTypes = {
  onSubmit: PropTypes.func,
  isConversationChosen: PropTypes.bool,
};

MessageSender.defaultProps = {
  onSubmit: noop,
  isConversationChosen: false,
};

export default MessageSender;
