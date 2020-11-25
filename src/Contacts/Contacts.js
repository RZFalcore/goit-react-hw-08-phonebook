import React from "react";
const Contacts = ({ contacts }) => (
  <ul>
    {contacts.map((contact) => (
      <li key={contact.id}>
        <p>{contact.name}</p>
      </li>
    ))}
  </ul>
);

export default Contacts;
