import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeContact } from "../redux/contactsActions";

import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => (
  <li key={id} className={styles.contact}>
    <div className={styles.infoContainer}>
      <label className={styles.label}>{name}</label>
      <label>{number}</label>
    </div>
    <button className={styles.button} onClick={onDelete}>
      Delete
    </button>
  </li>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const contact = state.contacts.items.filter(
    (item) => item.id === ownProps.id
  )[0];
  return { ...contact };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
