import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import styles from "./UserMenu.module.css";

const UserMenu = ({ name, onLogout }) => (
  <div className={styles.wrap}>
    <p className={styles.userName}>{name}</p>
    <button className={styles.logOutBtn} onClick={onLogout}>
      Log Out
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.userNameSelector(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
