import React from 'react';
import { isArray } from 'lodash';
import PropTypes from 'prop-types';
import { Paper } from '@mui/material';
import sxShape from 'shapes/sxShape';
import styles from './styles';

const TileWrapper = ({ sx, children }) => (
  <Paper sx={[styles.root, ...(isArray(sx) ? sx : [sx])]}>{children}</Paper>
);

TileWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  sx: sxShape,
};

TileWrapper.defaultProps = {
  sx: {},
};

export default TileWrapper;
