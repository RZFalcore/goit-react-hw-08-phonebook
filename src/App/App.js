import React, { Component } from "react";

import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import Title from "../Title/Title";
import AddForm from "../AddForm/AddForm";

import { contactsFilter } from "../utils/helpers";
import styles from "../App/App.module.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export default class App extends Component {
  state = {
    animate: false,
  };

  componentDidMount() {
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
            <Contacts
              animate={animate}
              contacts={filteredContacts}
              onDelete={this.handleDeleteContact}
            />
        </Title>
      </div>
    );
  }
}
