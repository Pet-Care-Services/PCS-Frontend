import React, { useEffect } from 'react';
import { includes } from 'lodash';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ProtectedRoute from 'components/ProtectedRoute';
import { DEFAULT_ROUTE } from 'consts/config';
import { ITEM_TYPE } from 'consts/enums';
import useDialog from 'hooks/useDialog';
import useUserData from 'hooks/useUserData';
import ApplicationLayout from 'layouts/ApplicationLayout';
import Account from 'pages/application/Account';
import AdvertismentCreator from 'pages/application/Advertisements/Creator';
import AdvertismentsList from 'pages/application/Advertisements/List';
import EmailVerification from 'pages/application/Verification/EmailVerification';
import MobileVerification from 'templates/MobileVerification';
import VerifyEmailInformation from 'templates/VerifyEmailInformation';
import Page404 from './application/404';

const Routing = () => {
  const { emailVerified, smsVerified } = useUserData();
  const { openDialog } = useDialog();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!includes(pathname, 'verify-email')) {
      if (emailVerified === false) {
        openDialog({ content: <VerifyEmailInformation />, closable: false });
      } else if (smsVerified === false) {
        openDialog({ content: <MobileVerification />, closable: false });
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
        <Route path="account/:id" element={<Account />} />
        <Route
          path="creator"
          element={
            <ProtectedRoute>
              <AdvertismentCreator />
            </ProtectedRoute>
          }
        />

        <Route path="verify-email" element={<EmailVerification />} />
        <Route path="404" element={<Page404 />} />

        <Route path="" element={<Navigate to={DEFAULT_ROUTE} replace />} />
      </Route>

      <Route path="*" element={<Navigate to={DEFAULT_ROUTE} replace />} />
    </Routes>
  );
};

export default Routing;
