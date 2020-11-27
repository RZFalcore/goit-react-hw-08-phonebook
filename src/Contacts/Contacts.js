import React from "react";
import Contact from "../Contact/Contact";

const Contacts = ({ contacts }) => (
  <>
    <ul>
      {contacts.map((contact) => (
          <Contact contact={contact}  key={contact.id} />
      ))}
    </ul>
  </>
);

export default Contacts;
