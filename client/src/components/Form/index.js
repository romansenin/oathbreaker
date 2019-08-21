import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/google-logo.png";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      modalIsOpen: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // modal functions
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
    console.log(this.state.email);
    console.log(this.state.password);
    if (this.props.view === "signup") {
      console.log(this.state.confirmPassword);
    }

    event.preventDefault();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
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

          <div className="main">
            <div
              className={
                this.props.view === "login" ? "local-login" : "local-signup"
              }
            >
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
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleInputChange}
                />
              ) : (
                ""
              )}

              <button
                className={this.props.view === "login" ? "" : "signup-button"}
                type="submit"
              >
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
            <div>
              <button onClick={this.openModal}>Open Modal</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
                <button onClick={this.closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                  <input />
                  <button>tab navigation</button>
                  <button>stays</button>
                  <button>inside</button>
                  <button>the modal</button>
                </form>
              </Modal>
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
