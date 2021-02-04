import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeContact } from "../redux/contactsActions";

import styles from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => (
  <li key={contact.id} className={styles.contact}>
    <div className={styles.infoContainer}>
      <label className={styles.label}>{contact.name}</label>
      <label>{contact.number}</label>
    </div>
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

const mapStateToProps = (state, ownProps) => ({
  contact: state.contacts.items.filter((item) => item.id === ownProps.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(removeContact(ownProps.id)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Contact);