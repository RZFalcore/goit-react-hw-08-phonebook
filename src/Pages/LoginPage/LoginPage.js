import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations, authSelectors } from "../../redux/auth";

class LoginPage extends Component {
  state = { email: "", password: "" };

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.replace("/contacts");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isAuthenticated) {
      this.props.history.replace("/contacts");
    }
  }

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginReq(this.state);
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <h1>Log in</h1>
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
          <button type="submit">Log In</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: authSelectors.userAuthenticatedSelector(state),
});


const mapDispatchToProps = {
  loginReq: authOperations.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);