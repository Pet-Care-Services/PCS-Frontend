import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Routing = () => (
  <Routes>
    <Route path="public">
      <Route path="login" element="TODO: Login" />
      <Route path="register" element="TODO: Register" />
    </Route>
    <Route path="application">
      <Route path="dashboard" element="TODO: Dashboard" />
      <Route path="settings" element="TODO: Settings" />
    </Route>
  </Routes>
);

export default Routing;
