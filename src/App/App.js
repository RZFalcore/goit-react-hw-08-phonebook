import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Contacts from "../Contacts/Contacts";
import Title from "../Title/Title";
import AddForm from "../AddForm/AddForm";
import styles from "../App/App.module.css";


const numberFormater = number => {
  if (number.length > 9) {return number.slice(0, -1)};
  if (number.length === 3 || number.length === 6) { return number + "-" };
  return number
}
export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  
  handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const newPerson = { id: uuidv4(), name, number };
    
    this.setState((state) => ({ contacts: [...state.contacts, newPerson] }));
    this.setState({ name: "" });
  };

  render() {
    const { name, contacts, number } = this.state;

    const editedNumber = numberFormater(number);
    
    return (
      <div className={styles.container}>
        <Title text="Phonebook">
          <AddForm
            name={name}
            number={editedNumber}
            onChange={this.handleChange}
            onFormSubmit={this.handleFormSubmit}
          />
        </Title>
        <Title text="Contacts">
          <Contacts contacts={contacts} />
        </Title>
      </div>
    );
  }
}
