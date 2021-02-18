import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import Title from "../Title/Title";
import AddForm from "../AddForm/AddForm";
import { fetchContactsOperation } from "../redux/contactsOperations";
import styles from "../App/App.module.css";

class App extends Component {
  static propTypes = {
    fetchContacts: PropTypes.func.isRequired,
  };

  state = {
    animate: false,
  };

  componentDidMount() {
    this.props.fetchContacts();
    this.setState({ animate: true });
  }

  render() {
    const { animate } = this.state;
    return (
      <div className={styles.container}>
        <Title text="Phonebook">
          <AddForm />
        </Title>
        <Title text="Contacts">
          <Filter />
          <Contacts animate={animate} />
        </Title>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchContacts: fetchContactsOperation,
};

export default connect(null, mapDispatchToProps)(App);