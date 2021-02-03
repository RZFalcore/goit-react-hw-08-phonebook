import React from "react";
import PropTypes from "prop-types";

import styles from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => (
  <li key={contact.id}>
    <label>
      {contact.name}: {contact.number}
    </label>
    <button className={styles.button} onClick={onDelete}>
      Delete
    </button>
  </li>
);

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
