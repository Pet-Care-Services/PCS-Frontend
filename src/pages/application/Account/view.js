import React from 'react';
import { noop, values } from 'lodash';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { GENDER, ITEM_TYPE } from 'consts/enums';
import advertisementsShape from 'shapes/advertisementsShape';
import AdvertisementsView from './components/Advertisements';
import MainTileView from './components/MainTile';
import ReviewsView from './components/Reviews';
import { reviewsShape } from './shapes';
import styles from './styles';

const AccountView = ({
  isMyAccount,
  firstName,
  lastName,
  description,
  email,
  mobile,
  birthdate,
  gender,
  avatar,
  itemType,
  advertisements,
  reviews,
  onSwitchButtonClick,
  onSubmitProfileChanges,
  onSubmitReview,
  toggleEditMode,
  isEditMode,
  isLoadingFormSubmit,
  progressAWSSubmit,
  isLoadingAWSSubmit,
  isLoadingReviewSubmit,
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
          mobile={mobile}
          birthdate={birthdate}
          gender={gender}
          avatar={avatar}
          description={description}
          onSubmitProfileChanges={onSubmitProfileChanges}
          isLoadingFormSubmit={isLoadingFormSubmit}
          progressAWSSubmit={progressAWSSubmit}
          isLoadingAWSSubmit={isLoadingAWSSubmit}
        />
        <ReviewsView
          reviews={reviews}
          isMyAccount={isMyAccount}
          isLoading={isLoadingReviewSubmit}
          onSubmitReview={onSubmitReview}
        />
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
  mobile: PropTypes.string,
  avatar: PropTypes.string,
  birthdate: PropTypes.instanceOf(Date),
  gender: PropTypes.oneOf(values(GENDER)),
  isMyAccount: PropTypes.bool,
  itemType: PropTypes.oneOf(values(ITEM_TYPE)),
  advertisements: advertisementsShape,
  reviews: reviewsShape,
  onSwitchButtonClick: PropTypes.func,
  onSubmitProfileChanges: PropTypes.func,
  onSubmitReview: PropTypes.func,
  toggleEditMode: PropTypes.func,
  isEditMode: PropTypes.bool,
  isLoadingFormSubmit: PropTypes.bool,
  progressAWSSubmit: PropTypes.number,
  isLoadingAWSSubmit: PropTypes.bool,
  isLoadingReviewSubmit: PropTypes.bool,
};

AccountView.defaultProps = {
  description: '',
  email: '',
  mobile: '',
  birthdate: '',
  gender: '',
  isMyAccount: false,
  itemType: ITEM_TYPE.REQUEST,
  advertisements: [],
  reviews: [],
  onSwitchButtonClick: noop,
  onSubmitProfileChanges: noop,
  onSubmitReview: noop,
  toggleEditMode: noop,
  isEditMode: false,
  isLoadingFormSubmit: false,
  progressAWSSubmit: undefined,
  isLoadingAWSSubmit: false,
  isLoadingReviewSubmit: false,
};

export default AccountView;
