import React from 'react';
import { Form, Formik } from 'formik';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import Icon from 'components/Icon';
import Input from 'components/Input';
import useBreakpoints from 'hooks/useBreakpoints';
import styles from './styles';

const Topbar = ({
  initialValues,
  withRightIcons,
  onSearch,
  onMenuClick,
  onNotificationClick,
  onChatClick,
  onAccountClick,
}) => {
  const { t } = useTranslation();
  const { isSmallScreen } = useBreakpoints();

  return (
    <MuiAppBar position="static" sx={styles.root}>
      <MuiToolbar sx={styles.toolbar}>
        <Box sx={styles.icons}>
          <Icon size="large" Component={MenuIcon} onClick={onMenuClick} />
        </Box>
        {!isSmallScreen && (
          <Box sx={styles.searchWrapper}>
            <Box sx={styles.formWrapper}>
              <Formik initialValues={initialValues} onSubmit={onSearch}>
                <Form>
                  <Input
                    name="search"
                    label={t('searchOffer')}
                    endAdornment={<SearchOutlinedIcon sx={styles.inputIcon} />}
                    shrink={false}
                    small
                    noBorderEffects
                    rounded
                  />
                </Form>
              </Formik>
            </Box>
          </Box>
        )}
        <Box sx={{ ...styles.icons, ...styles.rightIcons }}>
          {withRightIcons && (
            <>
              <Icon
                size="large"
                Component={NotificationsNoneIcon}
                onClick={onNotificationClick}
              />
              <Icon
                size="large"
                Component={ChatOutlinedIcon}
                onClick={onChatClick}
              />
              <Icon
                size="large"
                Component={PersonIcon}
                onClick={onAccountClick}
              />
            </>
          )}
        </Box>
      </MuiToolbar>
    </MuiAppBar>
  );
};

Topbar.propTypes = {
  initialValues: PropTypes.shape({
    search: PropTypes.string,
  }),
  withRightIcons: PropTypes.bool,
  onSearch: PropTypes.func,
  onMenuClick: PropTypes.func,
  onNotificationClick: PropTypes.func,
  onChatClick: PropTypes.func,
  onAccountClick: PropTypes.func,
};

Topbar.defaultProps = {
  initialValues: {},
  withRightIcons: false,
  onSearch: noop,
  onMenuClick: noop,
  onNotificationClick: noop,
  onChatClick: noop,
  onAccountClick: noop,
};

export default Topbar;
