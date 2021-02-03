import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { numberFormater } from "../utils/helpers";
import styles from "./AddForm.module.css";

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
    const { onAddContact } = this.props;

    const newPerson = { id: uuidv4(), name, number };

    onAddContact(newPerson);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    const editedNumber = numberFormater(number);

    return (
      <form className={styles.form} onSubmit={this.handleFormSubmit}>
        <label className={styles.label} htmlFor="name">
          Name:
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.label} htmlFor="number">
          Number:
          <input
            className={styles.input}
            type="text"
            name="number"
            value={editedNumber}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.addContanct}>Add contanct</button>
      </form>
    );
  }
};

export default AddForm;
