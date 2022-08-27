import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import Button from 'components/Button';
import useDialog from 'hooks/useDialog';

const SimpleInfoDialogContent = ({ title, information, onAccept }) => {
  const { t } = useTranslation();
  const { closeDialog } = useDialog();

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h1">{title}</Typography>
      <Typography variant="body" sx={{ marginTop: 20, marginBottom: 20 }}>
        {information}
      </Typography>
      <Button
        onClick={onAccept || closeDialog}
        sx={{ width: 'fit-content', alignSelf: 'center' }}
      >
        {t('ok')}
      </Button>
    </Box>
  );
};

SimpleInfoDialogContent.propTypes = {
  title: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
  onAccept: PropTypes.func,
};

SimpleInfoDialogContent.defaultProps = {
  onAccept: null,
};

export default SimpleInfoDialogContent;
