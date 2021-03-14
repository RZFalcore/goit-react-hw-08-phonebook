import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";

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

const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: authSelectors.userAuthenticatedSelector(state),
});

export default connect(mapStateToProps)(PublicRoute);
