import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/system';
import ImageButton from 'components/ImageButton';
import { ITEM_TYPE } from 'consts/enums';
import styles from './styles';

const Step1 = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [hoverImageId, setHoverImageId] = useState(null);

  return (
    <Box sx={styles.root}>
      <Box
        sx={styles.imageWrapper}
        onMouseEnter={() => setHoverImageId(0)}
        onMouseLeave={() => setHoverImageId(null)}
      >
        <ImageButton
          img={require('assets/cat.jpg')}
          title={t('needKeeper')}
          onClick={() => onSubmit(ITEM_TYPE.REQUEST)}
          faded={hoverImageId === 1}
        />
      </Box>
      <Box
        sx={styles.imageWrapper}
        onMouseEnter={() => setHoverImageId(1)}
        onMouseLeave={() => setHoverImageId(null)}
      >
        <ImageButton
          img={require('assets/training.jpg')}
          title={t('iAmKeeper')}
          onClick={() => onSubmit(ITEM_TYPE.SERVICE)}
          faded={hoverImageId === 0}
          onMouseEnter={() => setHoverImageId(1)}
          onMouseLeave={() => setHoverImageId(null)}
        />
      </Box>
    </Box>
  );
};

Step1.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Step1;
