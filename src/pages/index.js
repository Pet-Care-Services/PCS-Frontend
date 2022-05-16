import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ITEM_TYPE } from 'consts/enums';
import AuthorizedLayout from 'layouts/AuthorizedLayout';
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
    </Route>

    <Route path="*" element={<Navigate to={DEFAULT_ROUTE} replace />} />
  </Routes>
);

export default Routing;
