import React, { useEffect } from 'react';
import { includes } from 'lodash';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ProtectedRoute from 'components/ProtectedRoute';
import { DEFAULT_ROUTE } from 'consts/config';
import { ITEM_TYPE } from 'consts/enums';
import useDialog from 'hooks/useDialog';
import useUserData from 'hooks/useUserData';
import ApplicationLayout from 'layouts/ApplicationLayout';
import AdvertismentCreator from 'pages/application/Advertisements/Creator';
import AdvertismentsList from 'pages/application/Advertisements/List';
import MobileVerification from 'templates/MobileVerification';
import VerifyEmailInformation from 'templates/VerifyEmailInformation';
import EmailVerification from './application/Verification/EmailVerification';

const Routing = () => {
  const { emailVerified, smsVerified } = useUserData();
  const { openDialog } = useDialog();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!includes(pathname, 'verify-email')) {
      if (emailVerified === false) {
        openDialog(<VerifyEmailInformation />, false);
      } else if (smsVerified === false) {
        openDialog(<MobileVerification />, false);
      }
    }
  }, [emailVerified, smsVerified, pathname]);

  return (
    <Routes>
      <Route path="application" element={<ApplicationLayout />}>
        <Route
          path="services"
          element={<AdvertismentsList itemType={ITEM_TYPE.SERVICE} />}
        />
        <Route
          path="requests"
          element={<AdvertismentsList itemType={ITEM_TYPE.REQUEST} />}
        />
        <Route
          path="creator"
          element={
            <ProtectedRoute>
              <AdvertismentCreator />
            </ProtectedRoute>
          }
        />

        <Route path="verify-email" element={<EmailVerification />} />
        <Route path="" element={<Navigate to={DEFAULT_ROUTE} replace />} />
      </Route>

      <Route path="*" element={<Navigate to={DEFAULT_ROUTE} replace />} />
    </Routes>
  );
};

export default Routing;
