import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const permission = false;

const AdminPage = () => {
  return (
    <Route
      render={() =>
        permission ? <h2>h3hhhhhhwhww</h2> : <Redirect to='/login' />
      }
    />
  );
};

export default AdminPage;
