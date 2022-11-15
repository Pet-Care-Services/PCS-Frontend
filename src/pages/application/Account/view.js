import React from 'react';
import { noop, values } from 'lodash';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { ITEM_TYPE } from 'consts/enums';
import advertisementsShape from 'shapes/advertisementsShape';
import AdvertisementsView from './components/Advertisements';
import CommentsView from './components/Comments';
import MainTileView from './components/MainTile';
import styles from './styles';

const AccountView = ({
  isMyAccount,
  firstName,
  lastName,
  description,
  email,
  itemType,
  advertisements,
  onSwitchButtonClick,
  onSubmitProfileChanges,
  toggleEditMode,
  isEditMode,
}) => {
  return (
    <Box sx={[styles.root, styles.column]}>
      <Box sx={styles.row}>
        <MainTileView
          isEditMode={isEditMode}
          isMyAccount={isMyAccount}
          firstName={firstName}
          lastName={lastName}
          toggleEditMode={toggleEditMode}
          email={email}
          description={description}
          onSubmitProfileChanges={onSubmitProfileChanges}
        />
        <CommentsView />
      </Box>
      <AdvertisementsView
        onSwitchButtonClick={onSwitchButtonClick}
        itemType={itemType}
        advertisements={advertisements}
        isMyAccount={isMyAccount}
      />
    </Box>
  );
};

AccountView.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  description: PropTypes.string,
  email: PropTypes.string,
  isMyAccount: PropTypes.bool,
  itemType: PropTypes.oneOf(values(ITEM_TYPE)),
  advertisements: advertisementsShape,
  onSwitchButtonClick: PropTypes.func,
  onSubmitProfileChanges: PropTypes.func,
  toggleEditMode: PropTypes.func,
  isEditMode: PropTypes.bool,
};

AccountView.defaultProps = {
  description: '',
  email: '',
  isMyAccount: false,
  itemType: ITEM_TYPE.REQUEST,
  advertisements: [],
  onSwitchButtonClick: noop,
  onSubmitProfileChanges: noop,
  toggleEditMode: noop,
  isEditMode: false,
};

export default AccountView;
