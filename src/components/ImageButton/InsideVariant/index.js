import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { defaultPropsObject, propTypesObject } from '../shapes';
import styles from './styles';

const InsideVariant = ({ img, title, faded, onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      ...styles.root,
      ...(onClick && styles.clickable),
    }}
  >
    <Box component="img" src={img} sx={styles.img} />
    <Box sx={styles.bottomBar}>
      <Typography variant="h2" sx={styles.title}>
        {title}
      </Typography>
    </Box>
    <Box sx={{ ...styles.fadeBlock, ...(faded && styles.faded) }} />
  </Box>
);

InsideVariant.propTypes = propTypesObject;

InsideVariant.defaultProps = defaultPropsObject;

export default InsideVariant;
