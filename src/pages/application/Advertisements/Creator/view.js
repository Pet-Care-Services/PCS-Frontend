import React from 'react';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import BackArrow from '@mui/icons-material/ArrowBackIosNew';
import { Box, Typography } from '@mui/material';
import { ITEM_TYPE } from 'consts/enums';
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
  type,
  isLoading,
  isLoadingAWSSubmit,
  progressAWSSubmit,
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
      {step === 3 && (
        <Step3
          onSubmit={handleDataSubmit}
          isService={type === ITEM_TYPE.SERVICE}
          isLoading={isLoading}
          isLoadingAWSSubmit={isLoadingAWSSubmit}
          progressAWSSubmit={progressAWSSubmit}
        />
      )}
    </Box>
  );
};

CreatorView.propTypes = {
  step: PropTypes.oneOf([1, 2, 3]).isRequired,
  type: PropTypes.string,
  goBack: PropTypes.func,
  handleTypeSelect: PropTypes.func,
  handleAnimalSelect: PropTypes.func,
  handleDataSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  isLoadingAWSSubmit: PropTypes.bool,
  progressAWSSubmit: PropTypes.number,
};

CreatorView.defaultProps = {
  type: '',
  goBack: noop,
  handleTypeSelect: noop,
  handleAnimalSelect: noop,
  handleDataSubmit: noop,
  isLoading: false,
  isLoadingAWSSubmit: false,
  progressAWSSubmit: undefined,
};

export default CreatorView;
