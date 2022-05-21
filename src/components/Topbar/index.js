import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MuiToolbar from '@mui/material/Toolbar';
import styles from './styles';

const Topbar = () => {
  return (
    <MuiAppBar position="static" sx={styles.root}>
      <MuiToolbar sx={styles.toolbar}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </MuiToolbar>
    </MuiAppBar>
  );
};

Topbar.propTypes = {};

Topbar.defaultProps = {};

export default Topbar;
