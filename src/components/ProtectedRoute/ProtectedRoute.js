import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {
        props.loggedIn ? <Component {...props} >{props.children}</Component> : <Redirect to="/signin" />
      }
    </Route>
  );
}

export default ProtectedRoute;
