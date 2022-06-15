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

const MessageSender = ({ onSubmit }) => {
  const { t } = useTranslation();

  return (
    <Formik initialValues={{ message: '' }} onSubmit={onSubmit}>
      {({ submitForm }) => (
        <Box
          component={Form}
          sx={{
            width: '100%',
            height: 50,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: (theme) => theme.palette.secondary.main,
            padding: (theme) => theme.spacing(0, 5),
          }}
        >
          <Icon Component={AddCircleOutlineIcon} size="large" />
          <Input
            name="message"
            label={t('message')}
            shrink={false}
            sx={{ margin: (theme) => theme.spacing(0, 5) }}
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
