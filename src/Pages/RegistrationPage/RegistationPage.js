import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../../redux/auth";
class RegistationPage extends Component {
  state = { name: "", email: "", password: "" };

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegistration(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <h1>Registration</h1>
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Register</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegistration: authOperations.registration,
};

export default connect(null, mapDispatchToProps)(RegistationPage);
