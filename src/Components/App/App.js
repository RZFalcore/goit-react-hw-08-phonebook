import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../Header/Header";
import ContactsPage from "../../Pages/ContactsPage/ContactsPage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import RegistationPage from "../../Pages/RegistrationPage/RegistationPage";
import { authOperations } from "../../redux/auth";

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
            <Route exact path="/contacts" component={ContactsPage} />
            <Route path="/registration" component={RegistationPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
