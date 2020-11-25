import React from "react";
import styles from "./AddForm.module.css";

const AddForm = ({ name, onNameChange, onFormSubmit }) => (
  <form className={styles.form} onSubmit={onFormSubmit}>
    <label className={styles.label} htmlFor="name">
      Name:
      <input
        className={styles.nameInput}
        type="text"
        name="name"
        value={name}
        onChange={onNameChange}
      />
    </label>
    <button className={styles.addContanct}>Add contanct</button>
  </form>
);

export default AddForm;
