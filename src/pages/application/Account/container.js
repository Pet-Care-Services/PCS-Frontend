import React, { useEffect, useMemo, useState } from 'react';
import { get, includes, toString, values } from 'lodash';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import { ITEM_TYPE } from 'consts/enums';
import useDialog from 'hooks/useDialog';
import useURLParams from 'hooks/useURLParams';
import useUserData from 'hooks/useUserData';
import Login from 'templates/Login';
import RequestOfferCreator from 'templates/OfferCreator/RequestOfferCreator';
import ServiceOfferCreator from 'templates/OfferCreator/ServiceOfferCreator';
import formatAdvertisements from 'utils/formatAdvertisements';
import { getUserProfile, postProfile, USER_PROFILE_KEY } from './queries';
import AccountView from './view';

const AccountContainer = () => {
  const { id } = useParams();
  const { userId, isLoggedIn, email } = useUserData();
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

  const { mutate: submitProfile } = useMutation(postProfile, {
    onSuccess: () => {
      refetchProfile().then(() => {
        setIsEditMode(false);
      });
    },
  });

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
    submitProfile(values);
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
      email={email}
      isMyAccount={toString(userId) === toString(id)}
      itemType={displayedItemType}
      onSwitchButtonClick={onSwitchButtonClick}
      onSubmitProfileChanges={onSubmitProfileChanges}
      toggleEditMode={() => setIsEditMode((v) => !v)}
      isEditMode={isEditMode}
      advertisements={
        displayedItemType === ITEM_TYPE.REQUEST
          ? formattedRequests
          : formattedServices
      }
    />
  );
};

AccountContainer.propTypes = {};

AccountContainer.defaultProps = {};

export default AccountContainer;
