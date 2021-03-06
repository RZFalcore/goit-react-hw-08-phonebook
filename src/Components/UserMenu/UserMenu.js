import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";

const UserMenu = ({ name, onLogout }) => (
  <div style={{ display: "flex" }}>
    <img src="" alt="" />
    <p>{name}</p>
    <button onClick={onLogout}>Log Out</button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.userNameSelector(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
