import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import Button from 'components/Button';
import useDialog from 'hooks/useDialog';

const SimpleInfoDialogContent = ({ title, information }) => {
  const { t } = useTranslation();
  const { closeDialog } = useDialog();

  return (
    <>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="body" sx={{ marginTop: 20, marginBottom: 20 }}>
        {information}
      </Typography>
      <Button
        onClick={closeDialog}
        sx={{ width: 'fit-content', alignSelf: 'center' }}
      >
        {t('ok')}
      </Button>
    </>
  );
};

SimpleInfoDialogContent.propTypes = {
  title: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
};

export default SimpleInfoDialogContent;
