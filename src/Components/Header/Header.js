import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import styles from "./Header.module.css";
import { authSelectors } from "../../redux/auth";

const Header = ({ isAuthenticated }) => (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
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
    {isAuthenticated && <UserMenu />}
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.userAuthenticatedSelector(state),
});

export default connect(mapStateToProps)(Header);
