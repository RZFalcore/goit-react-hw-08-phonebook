import React from "react";

const Contact = ({ contact }) => (
  <li key={contact.id}>
    <label>
      {contact.name}: {contact.number}
    </label>
  </li>
);

export default Contact;
