import React, { Component, Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../Header/Header";
import { authOperations } from "../../redux/auth";
import PublicRoute from "../PublicRoute/PublicRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import routes from "../../routes";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Header />

          <Switch>
            {routes.map((route) =>
              route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute key={route.label} {...route} />
              )
            )}
            <Redirect to="/contacts" />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
