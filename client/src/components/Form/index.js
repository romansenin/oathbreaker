import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../../images/google-logo.png";

const axios = require("axios");

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      displayName: "",
      password: "",
      password2: "",
      errors: [],
      loginMessage: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const displayName = this.state.displayName;
    const email = this.state.email;
    const password = this.state.password;
    const password2 = this.state.password2;

    if (this.props.view === "signup") {
      // signup submit
      this.setState({ errors: [] }, () => {
        let errors = [];

        // Check required fields
        if (!displayName || !email || !password || !password2)
          errors.push({ msg: "Please fill in all fields" });

        // Check password match
        if (password !== password2)
          errors.push({ msg: "Passwords do not match" });

        // Check password length
        if (password.length < 6)
          errors.push({ msg: "Password should be at least 6 characters" });

        if (errors.length) this.setState({ errors });
        else
          axios
            .post("/register", { displayName, email, password, password2 })
            .then(result => {
              if (result.data.error_msg) {
                this.setState({ errors: [{ msg: result.data.error_msg }] });
              } else {
                // Successfully registered, set loginMessage to true -> re-render -> redirect to login page
                this.setState(() => ({
                  loginMessage: true
                }));
              }
            })
            .catch(err => console.log(err));
      });
    } else {
      // login submit
      this.setState({ errors: [] }, () => {
        axios
          .post("/auth/local", { email, password })
          .then(result => {
            if (result.data.error_msg)
              this.setState({ errors: [{ msg: result.data.error_msg }] });
            else {
              // successful login
            }
          })
          .catch(err => console.log(err));
      });
    }

    event.preventDefault();
  }

  render() {
    if (this.state.loginMessage) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: {}
          }}
        />
      );
    }

    return (
      <div className="form-container">
        <form
          onSubmit={this.handleSubmit}
          className={this.props.view === "signup" ? "signup-form" : ""}
        >
          {this.props.view === "login" ? (
            <h1>Log In To Your Account</h1>
          ) : (
            <h1>Sign Up for an Account</h1>
          )}

          {this.state.errors.length ? (
            <ul style={{ marginLeft: 0 }}>
              {this.state.errors.map((value, index) => {
                return (
                  <div
                    className="alert alert-warning alert-dismissible fade show"
                    role="alert"
                    key={index}
                  >
                    {value.msg}
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                      style={{ padding: 0, marginRight: "2%" }}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                );
              })}
            </ul>
          ) : (
            ""
          )}

          <div className="main">
            <div
              className={
                this.props.view === "login" ? "local-login" : "local-signup"
              }
            >
              {this.props.view === "signup" ? (
                <input
                  type="text"
                  placeholder="Display Name"
                  onFocus={e => (e.target.placeholder = "")}
                  onClick={e => (e.target.placeholder = "")}
                  onBlur={e => (e.target.placeholder = "Display Name")}
                  name="displayName"
                  value={this.state.displayName}
                  onChange={this.handleInputChange}
                />
              ) : (
                ""
              )}

              {this.props.loginMessage ? (
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                  style={{ width: "100%" }}
                >
                  You are now registered and can log in
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                    style={{ padding: 0, marginRight: "2%" }}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              ) : (
                ""
              )}

              <input
                type="email"
                placeholder="Email"
                onFocus={e => (e.target.placeholder = "")}
                onClick={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "Email")}
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <input
                type="password"
                placeholder="Password"
                onFocus={e => (e.target.placeholder = "")}
                onClick={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "Password")}
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
              {this.props.view === "signup" ? (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  onFocus={e => (e.target.placeholder = "")}
                  onClick={e => (e.target.placeholder = "")}
                  onBlur={e => (e.target.placeholder = "Confirm Password")}
                  name="password2"
                  value={this.state.password2}
                  onChange={this.handleInputChange}
                />
              ) : (
                ""
              )}

              <button className="submit-button" type="submit">
                {this.props.view === "login" ? "Log In" : "Sign Up"}
              </button>
              {this.props.view === "login" ? (
                <div className="keep-logged-in">
                  <p>Need an account?</p>
                  <Link to="/signup">Sign Up</Link>
                </div>
              ) : (
                <div className="keep-logged-in">
                  <p>Already have an account?</p>
                  <Link to="/login">Log In</Link>
                </div>
              )}
            </div>

            {this.props.view === "login" ? (
              <div className="social-media">
                <a href="/auth/google">
                  <img src={logo} alt="Google Sign In" />
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
