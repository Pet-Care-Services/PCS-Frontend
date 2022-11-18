import React, { useEffect, useMemo, useState } from 'react';
import { get, includes, toString, values } from 'lodash';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import { ITEM_TYPE, S3_DIRECTORY } from 'consts/enums';
import useAWSUpload from 'hooks/useAWSUpload';
import useDialog from 'hooks/useDialog';
import useURLParams from 'hooks/useURLParams';
import useUserData from 'hooks/useUserData';
import Login from 'templates/Login';
import RequestOfferCreator from 'templates/OfferCreator/RequestOfferCreator';
import ServiceOfferCreator from 'templates/OfferCreator/ServiceOfferCreator';
import formatAdvertisements from 'utils/formatAdvertisements';
import {
  getUserProfile,
  postProfile,
  postReview,
  USER_PROFILE_KEY,
} from './queries';
import AccountView from './view';

const AccountContainer = () => {
  const { id } = useParams();
  const { userId, isLoggedIn, email, mobile, refetchMe } = useUserData();
  const { params } = useURLParams();
  const { openDialog } = useDialog();
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [displayedItemType, setDisplayedItemType] = useState(ITEM_TYPE.REQUEST);
  const {
    refetch: refetchProfile,
    data: userProfileData,
    isLoading: isLoadingUserProfile,
  } = useQuery([USER_PROFILE_KEY, id], () => getUserProfile(id), {
    refetchOnWindowFocus: false,
    retry: false,
    onError: () => {
      navigate('/application/404');
    },
  });

  const { isLoading: isLoadingFormSubmit, mutate: submitProfile } = useMutation(
    postProfile,
    {
      onSuccess: () => {
        Promise.all([refetchMe(), refetchProfile()]).then(() => {
          setIsEditMode(false);
        });
      },
    }
  );

  const { isLoading: isLoadingReviewSubmit, mutate: submitReview } =
    useMutation(postReview, {
      onSuccess: () => {
        refetchProfile();
      },
    });

  const {
    uploadFileToS3,
    progress: progressAWSSubmit,
    isLoading: isLoadingAWSSubmit,
  } = useAWSUpload();

  useEffect(() => {
    if (!isLoggedIn && isEditMode) {
      setIsEditMode(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (includes(values(ITEM_TYPE), params.itemType)) {
      setDisplayedItemType(params.itemType);
    }
  }, [params.itemType]);

  const userProfile = get(userProfileData, 'data');

  const onContactClick = (itemType, advertisement) => {
    if (isLoggedIn) {
      const content =
        itemType === ITEM_TYPE.SERVICE ? (
          <ServiceOfferCreator advertisement={advertisement} />
        ) : (
          <RequestOfferCreator advertisement={advertisement} />
        );
      openDialog({
        content,
        width: 1000,
      });
    } else {
      openDialog({ content: <Login /> });
    }
  };

  const onSwitchButtonClick = (itemType) => {
    setDisplayedItemType(itemType);
  };

  const onSubmitProfileChanges = (values) => {
    const submit = (publicAvatarUrl) => {
      submitProfile({ ...values, avatar: publicAvatarUrl });
    };

    if (values.avatar.file) {
      uploadFileToS3(values.avatar.file, S3_DIRECTORY.AVATARS, submit);
    } else {
      submit(undefined);
    }
  };

  const onSubmitReview = (values) => {
    submitReview({ ...values, userId: id });
  };

  const formattedRequests = useMemo(() => {
    if (isLoadingUserProfile) return [];

    return formatAdvertisements(userProfile.requests, (request) =>
      onContactClick(ITEM_TYPE.REQUEST, request)
    );
  }, [userProfile]);

  const formattedServices = useMemo(() => {
    if (isLoadingUserProfile) return [];

    return formatAdvertisements(userProfile.services, (service) =>
      onContactClick(ITEM_TYPE.SERVICE, service)
    );
  }, [userProfile]);

  if (isLoadingUserProfile) {
    return <Loader />;
  }

  return (
    <AccountView
      firstName={userProfile.firstName}
      lastName={userProfile.lastName}
      description={userProfile.description}
      birthdate={new Date(userProfile.birthdate)}
      avatar={userProfile.avatar}
      gender={userProfile.gender}
      email={email}
      mobile={mobile}
      isMyAccount={toString(userId) === toString(id)}
      itemType={displayedItemType}
      onSwitchButtonClick={onSwitchButtonClick}
      onSubmitProfileChanges={onSubmitProfileChanges}
      onSubmitReview={onSubmitReview}
      toggleEditMode={() => setIsEditMode((v) => !v)}
      isEditMode={isEditMode}
      advertisements={
        displayedItemType === ITEM_TYPE.REQUEST
          ? formattedRequests
          : formattedServices
      }
      reviews={userProfile.reviews}
      isLoadingFormSubmit={isLoadingFormSubmit}
      progressAWSSubmit={progressAWSSubmit}
      isLoadingAWSSubmit={isLoadingAWSSubmit}
      isLoadingReviewSubmit={isLoadingReviewSubmit}
    />
  );
};

AccountContainer.propTypes = {};

AccountContainer.defaultProps = {};

export default AccountContainer;
