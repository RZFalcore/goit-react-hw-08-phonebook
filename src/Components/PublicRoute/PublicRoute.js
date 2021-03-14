import React from "react";
import { Route, Redirect } from "react-router-dom";
import withAuth from "../HOC/withAuth";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated && props.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default withAuth(PublicRoute);