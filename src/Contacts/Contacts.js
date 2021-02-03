import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import Contact from "../Contact/Contact";

const Contacts = ({ contacts, onDelete }) => (
  <>
    <ul>
      {contacts.map((contact) => (
        <Contact contact={contact}
           key={contact.id}
           onDelete={() => onDelete(contact.id)}       
        />
      ))}
    </ul>
  </>
);

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
