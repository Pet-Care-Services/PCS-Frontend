import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ITEM_TYPE } from 'consts/enums';
import AuthorizedLayout from 'layouts/AuthorizedLayout';
import AdvertismentCreator from 'pages/authorized/Advertisements/Creator';
import AdvertismentsList from 'pages/authorized/Advertisements/List';

const DEFAULT_ROUTE = '/application/services';

const Routing = () => (
  <Routes>
    <Route path="public">
      <Route path="login" element="TODO: Login" />
      <Route path="register" element="TODO: Register" />
    </Route>
    <Route path="application" element={<AuthorizedLayout />}>
      <Route
        path="services"
        element={<AdvertismentsList itemType={ITEM_TYPE.SERVICE} />}
      />
      <Route
        path="requests"
        element={<AdvertismentsList itemType={ITEM_TYPE.REQUEST} />}
      />
      <Route path="creator" element={<AdvertismentCreator />}>
        <Route path="step1" element={'step1'} />
        <Route path="step2" element={'step2'} />
        <Route path="step3" element={'step3'} />
      </Route>
    </Route>

    <Route path="*" element={<Navigate to={DEFAULT_ROUTE} replace />} />
  </Routes>
);

export default Routing;
