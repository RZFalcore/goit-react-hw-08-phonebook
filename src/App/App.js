import React, { Component } from "react";

import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import Title from "../Title/Title";
import AddForm from "../AddForm/AddForm";

import { contactsFilter } from "../utils/helpers";
import styles from "../App/App.module.css";
export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts ) this.setState({contacts: savedContacts})
  }
  
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) localStorage.setItem("contacts", JSON.stringify(contacts))
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddContact = (newContact) => {
    const { contacts } = this.state;

    const existedContact = contacts.filter(
      (contact) => contact.name === newContact.name
    );

    !existedContact[0]
      ? this.setState((state) => ({
          contacts: [...state.contacts, newContact],
        }))
      : alert(`${newContact.name} is already in contacts.`);
  };

  handleDeleteContact = (id) => {
    const { contacts } = this.state;
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    console.log(contacts, filteredContacts);
    this.setState({ contacts: [...filteredContacts] });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contactsFilter(filter, contacts);

    return (
      <div className={styles.container}>
        <Title text="Phonebook">
          <AddForm onAddContact={this.handleAddContact} />
        </Title>
        <Title text="Contacts">
          <Filter filter={filter} onChange={this.handleChange} />
          <Contacts
            contacts={filteredContacts}
            onDelete={this.handleDeleteContact}
          />
        </Title>
      </div>
    );
  }
}
