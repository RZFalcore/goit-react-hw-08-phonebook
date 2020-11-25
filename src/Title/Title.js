import React from "react";
import styles from "./Title.module.css";

const Title = ({ text, children }) => (
  <>
    <h2 className={styles.title}>{text}</h2>
    {children}
  </>
);

export default Title;
