import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import { numberFormater } from "../../utils/helpers";
import styles from "./AddForm.module.css";

toast.configure();

class AddForm extends Component {
  state = { name: "", number: "" };

  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const { onAddContact, contacts } = this.props;

    const isContactExist = contacts.find(
      (contact) => contact.name.toLowerCase() === name.trim().toLowerCase()
    );

    if (isContactExist === undefined) {
      const newPerson = { id: uuidv4(), name: name.trim(), number };
      onAddContact(newPerson);
      this.setState({ name: "", number: "" });
    } else {
      return toast.error(`${name} is already in contacts!`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 5000,
      });
    }
  };

  render() {
    const { name, number } = this.state;

    const editedNumber = numberFormater(number);

    return (
      <form className={styles.form} onSubmit={this.handleFormSubmit}>
        <label className={styles.label} htmlFor="name">
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.label} htmlFor="number">
          Number
          <input
            className={styles.input}
            type="text"
            name="number"
            value={editedNumber}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.addContanct}>Add contact</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContactOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
