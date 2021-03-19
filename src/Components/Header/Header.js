import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import { authSelectors } from "../../redux/auth";
import styles from "./Header.module.css";

const Header = ({ isDataLoaded, isAuthenticated }) => (
  <div className={styles.wrap}>
    <ul className={styles.list}>
      {isAuthenticated ? (
        <li className={styles.listItem}>
          <NavLink
            to="/contacts"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Contacts
          </NavLink>
        </li>
      ) : (
        <>
          <li className={styles.listItem}>
            <NavLink
              to="/login"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Log In
            </NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink
              to="/registration"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Registration
            </NavLink>
          </li>
        </>
      )}
    </ul>
    {isDataLoaded && <UserMenu />}
  </div>
);

const mapStateToProps = (state) => ({
  isDataLoaded: authSelectors.userNameSelector(state),
  isAuthenticated: authSelectors.userAuthenticatedSelector(state),
});

export default connect(mapStateToProps)(Header);
