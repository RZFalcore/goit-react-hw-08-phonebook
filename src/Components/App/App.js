import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ContactsPage from "../../Pages/ContactsPage/ContactsPage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import RegistationPage from "../../Pages/RegistrationPage/RegistationPage";
import Header from "../Header/Header";
import { authOperations } from "../../redux/auth";
import PublicRoute from "../PublicRoute/PublicRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import routes from "../../routes";

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
            <PublicRoute path="/login" exact component={LoginPage} restricted={true}/>
            <PublicRoute path="/registration" exact component={RegistationPage} restricted={true} />
            
            {/* <PrivateRoute path="/contacts" extact component={ContactsPage} />
            <Route exact path="/contacts" component={ContactsPage} />
            <Route path="/registration" component={RegistationPage} />
            <Route path="/login" component={LoginPage} />  */}
            
            {/* {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
             */}

          </Switch>
        </Suspense>
      </>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
