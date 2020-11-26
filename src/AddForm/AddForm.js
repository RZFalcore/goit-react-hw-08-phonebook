import React from "react";
import styles from "./AddForm.module.css";

const AddForm = ({ name, number, onChange, onFormSubmit }) => (
  <form className={styles.form} onSubmit={onFormSubmit}>
    <label className={styles.label} htmlFor="name">
      Name:
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
    </label>
    <label className={styles.label} htmlFor="number">
      Number:
      <input
        className={styles.input}
        type="text"
        name="number"
        value={number}
        onChange={onChange}
      />
    </label>
    <button className={styles.addContanct}>Add contanct</button>
  </form>
);

export default AddForm;
