import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations, authSelectors } from "../../redux/auth";
import Title from "../../Components/Title/Title";
class RegistationPage extends Component {
  state = { name: "", email: "", password: "" };

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
    this.props.onRegistration(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <Title text="Registration">
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
        </Title>
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: authSelectors.userAuthenticatedSelector(state),
});

const mapDispatchToProps = {
  onRegistration: authOperations.registration,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistationPage);
