import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import ActionText from 'components/ActionText';
import Button from 'components/Button';
import useDialog from 'hooks/useDialog';
import styles from './styles';

const SimpleInfoDialogContent = ({
  title,
  information,
  onAccept,
  onLinkClick,
  linkText,
}) => {
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
      {onAccept && (
        <Button
          onClick={onAccept || closeDialog}
          sx={{ width: 'fit-content', alignSelf: 'center' }}
        >
          {t('ok')}
        </Button>
      )}
      {onLinkClick && linkText && (
        <ActionText onClick={onLinkClick} sx={styles.linkButton}>
          {linkText}
        </ActionText>
      )}
    </Box>
  );
};

SimpleInfoDialogContent.propTypes = {
  title: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
  onAccept: PropTypes.func,
  onLinkClick: PropTypes.func,
  linkText: PropTypes.string,
};

SimpleInfoDialogContent.defaultProps = {
  onAccept: null,
  onLinkClick: null,
  linkText: '',
};

export default SimpleInfoDialogContent;
