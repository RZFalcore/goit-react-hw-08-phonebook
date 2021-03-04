import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import ContactsPage from "../../Pages/ContactsPage/ContactsPage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import RegistationPage from "../../Pages/RegistrationPage/RegistationPage";

const App = () => (
  <>
    <Header />
    
    <Switch>
      <Route exact path="/contacts" component={ContactsPage} />
      <Route path="/registration" component={RegistationPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </>
);

export default App;
