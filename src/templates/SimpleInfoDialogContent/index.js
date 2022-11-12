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
  onLeftLinkClick,
  leftLinkText,
  onRightLinkClick,
  rightLinkText,
}) => {
  const { t } = useTranslation();
  const { closeDialog } = useDialog();

  return (
    <Box sx={styles.root}>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="body" sx={styles.information}>
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
      <Box sx={styles.linksWrapper}>
        {onLeftLinkClick && leftLinkText && (
          <ActionText onClick={onLeftLinkClick}>{leftLinkText}</ActionText>
        )}
        {onRightLinkClick && rightLinkText && (
          <ActionText onClick={onRightLinkClick} sx={styles.rightLinkButton}>
            {rightLinkText}
          </ActionText>
        )}
      </Box>
    </Box>
  );
};

SimpleInfoDialogContent.propTypes = {
  title: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
  onAccept: PropTypes.func,
  onLeftLinkClick: PropTypes.func,
  leftLinkText: PropTypes.string,
  onRightLinkClick: PropTypes.func,
  rightLinkText: PropTypes.string,
};

SimpleInfoDialogContent.defaultProps = {
  onAccept: null,
  onLeftLinkClick: null,
  leftLinkText: '',
  onRightLinkClick: null,
  rightLinkText: '',
};

export default SimpleInfoDialogContent;
