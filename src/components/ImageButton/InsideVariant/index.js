import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import useBreakpoints from 'hooks/useBreakpoints';
import { defaultPropsObject, propTypesObject } from '../shapes';
import styles from './styles';

const InsideVariant = ({ img, title, faded, onClick }) => {
  const { isMediumScreen } = useBreakpoints();

  return (
    <Box onClick={onClick} sx={[styles.root, onClick && styles.clickable]}>
      <Box component="img" src={img} sx={styles.img} />
      <Box sx={styles.bottomBar}>
        <Typography variant={isMediumScreen ? 'h4' : 'h3'} sx={styles.title}>
          {title}
        </Typography>
      </Box>
      <Box sx={[styles.fadeBlock, faded && styles.faded]} />
    </Box>
  );
};

InsideVariant.propTypes = propTypesObject;

InsideVariant.defaultProps = defaultPropsObject;

export default InsideVariant;
