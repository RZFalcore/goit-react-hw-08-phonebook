import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => (
  <ul>
    <NavLink
      to="/contacts"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Contacts
    </NavLink>
    <NavLink
      to="/registration"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Registration
    </NavLink>
    <NavLink
      to="/login"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Log In
    </NavLink>
  </ul>
);

export default Header;
