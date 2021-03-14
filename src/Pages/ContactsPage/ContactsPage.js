import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Contacts from "../../Components/Contacts/Contacts";
import Filter from "../../Components/Filter/Filter";
import Title from "../../Components/Title/Title";
import AddForm from "../../Components/AddForm/AddForm";
import { contactsOperations } from "../../redux/contacts";
import { authSelectors } from "../../redux/auth/";
import styles from "./ContactsPage.module.css";

class HomePage extends Component {
  static propTypes = {
    fetchContacts: PropTypes.func.isRequired,
  };

  state = {
    animate: false,
  };

  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.replace("/login");
      return;
    }
    this.props.fetchContacts();
    this.setState({ animate: true });
  }

  componentDidUpdate() {
    if (!this.props.isAuthenticated) {
      this.props.history.replace("/login");
      return;
    }
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

const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: authSelectors.userAuthenticatedSelector(state),
});

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContactsOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
