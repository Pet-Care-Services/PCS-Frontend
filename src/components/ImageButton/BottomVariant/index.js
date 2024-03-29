import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { defaultPropsObject, propTypesObject } from '../shapes';
import styles from './styles';

const BottomVariant = ({ img, title, faded, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{ ...styles.root, ...(onClick && styles.clickable) }}
    >
      <Box sx={styles.imgWrapper}>
        <Box component="img" src={img} sx={styles.img} />
        <Box sx={{ ...styles.fadeBlock, ...(faded && styles.faded) }} />
      </Box>
      <Typography
        variant="h2"
        sx={{ ...styles.title, ...(faded && styles.textFaded) }}
      >
        {title}
      </Typography>
    </Box>
  );
};

BottomVariant.propTypes = propTypesObject;

BottomVariant.defaultProps = defaultPropsObject;

export default BottomVariant;
