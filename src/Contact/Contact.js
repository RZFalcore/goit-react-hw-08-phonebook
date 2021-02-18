import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeContactOperation } from "../redux/contactsOperations";
import contactsSelectors from "../redux/contactsSelectors";

import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => (
  <li key={id} className={styles.contact}>
    <div className={styles.infoContainer}>
      <label className={styles.label}>{name}</label>
      <label>{number}</label>
    </div>
    <button className={styles.button} onClick={onDelete}>
      Del
    </button>
  </li>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps.id);
  return { ...contact };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(removeContactOperation(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
