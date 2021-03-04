import React, { Component } from "react";

const initialState = { name: "", email: "", password: "" };

class RegistationPage extends Component {
  state = initialState;

  handleInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState(initialState);
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <h1>Registration</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
          <button type="submit">Register</button>
        </form>
      </>
    );
  }
}

export default RegistationPage;
