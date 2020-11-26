import React from "react";
const Contacts = ({ contacts }) => (
  <ul>
    {contacts.map((contact) => (
      <li key={contact.id}>
        <label>
          {contact.name}: {contact.number}
        </label>
      </li>
    ))}
  </ul>
);

export default Contacts;
