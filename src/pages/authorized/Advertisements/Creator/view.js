import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import BackArrow from '@mui/icons-material/ArrowBackIosNew';
import { Box, Typography } from '@mui/material';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import styles from './styles';

const CreatorView = ({
  step,
  goBack,
  handleTypeSelect,
  handleAnimalSelect,
  handleDataSubmit,
}) => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.topPanel}>
        <Box sx={styles.backWrapper} onClick={goBack}>
          <BackArrow sx={styles.backIcon} />
          <Typography>{t('back')}</Typography>
        </Box>
      </Box>
      {step === 1 && <Step1 onSubmit={handleTypeSelect} />}
      {step === 2 && <Step2 onSubmit={handleAnimalSelect} />}
      {step === 3 && <Step3 onSubmit={handleDataSubmit} />}
    </Box>
  );
};

CreatorView.propTypes = {
  step: PropTypes.oneOf([1, 2, 3]).isRequired,
  goBack: PropTypes.func,
  handleTypeSelect: PropTypes.func,
  handleAnimalSelect: PropTypes.func,
  handleDataSubmit: PropTypes.func,
};

CreatorView.defaultProps = {
  goBack: noop,
  handleTypeSelect: noop,
  handleAnimalSelect: noop,
  handleDataSubmit: noop,
};

export default CreatorView;
