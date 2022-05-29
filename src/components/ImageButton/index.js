import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import styles from './styles';

const ImageButton = ({ img, title, faded, onClick }) => (
  <Box
    onClick={onClick}
    sx={{ ...styles.root, ...(onClick && styles.clickable) }}
  >
    <Box component="img" src={img} sx={styles.img} />
    <Box sx={styles.bottomBar}>
      <Typography variant="h2" sx={styles.title}>
        {title}
      </Typography>
    </Box>
    {faded && <Box sx={styles.fade} />}
  </Box>
);

ImageButton.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  faded: PropTypes.bool,
};

ImageButton.defaultProps = {
  onClick: null,
  faded: false,
};

export default ImageButton;
