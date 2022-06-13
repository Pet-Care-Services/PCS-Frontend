import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from 'components/ProtectedRoute';
import { DEFAULT_ROUTE } from 'consts/config';
import { ITEM_TYPE } from 'consts/enums';
import ApplicationLayout from 'layouts/ApplicationLayout';
import AdvertismentCreator from 'pages/application/Advertisements/Creator';
import AdvertismentsList from 'pages/application/Advertisements/List';

const Routing = () => (
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
    </Route>

    <Route path="*" element={<Navigate to={DEFAULT_ROUTE} replace />} />
  </Routes>
);

export default Routing;
