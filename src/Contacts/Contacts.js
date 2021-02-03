import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import styles from "./Contacts.module.css";
import quickSlide from "../transitions/quickSlide.module.css";

import Contact from "../Contact/Contact";

const Contacts = ({ contacts, onDelete, animate }) => (
  <>
    <TransitionGroup component="ul" className={styles.contactsList}>
      {contacts.map((contact) => (
        <CSSTransition
          key={contact.id}
          in={animate}
          timeout={250}
          classNames={quickSlide}
          unmountOnExit
        >
          <Contact
            contact={contact}
            key={contact.id}
            onDelete={() => onDelete(contact.id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
