import React, { Component } from "react";

import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import Title from "../Title/Title";
import AddForm from "../AddForm/AddForm";

import { contactsFilter } from "../utils/helpers";
import styles from "../App/App.module.css";
export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddContact = (newContact) => {
    const { contacts } = this.state;

    const existedContact = contacts.filter(
      (contact) => contact.name === newContact.name
    );

    console.log(existedContact);
    !existedContact[0]
      ? this.setState((state) => ({
          contacts: [...state.contacts, newContact],
        }))
      : alert(`${newContact.name} is already in contacts.`);
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contactsFilter(filter, contacts);

    return (
      <div className={styles.container}>
        <Title text="Phonebook">
          <AddForm
            onChange={this.handleChange}
            onAddContact={this.handleAddContact}
          />
        </Title>
        <Title text="Contacts">
          <Filter filter={filter} onChange={this.handleChange} />
          <Contacts contacts={filteredContacts} />
        </Title>
      </div>
    );
  }
}
