import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/google-logo.png";

const Form = props => {
  return (
    <div className="form-container">
      <form action="" className={props.view === "signup" ? "signup-form" : ""}>
        {props.view === "login" ? (
          <h1>Log In To Your Account</h1>
        ) : (
          <h1>Sign Up for an Account</h1>
        )}

        <div className="main">
          <div
            className={props.view === "login" ? "local-login" : "local-signup"}
          >
            <input
              type="email"
              placeholder="Email"
              onFocus={e => (e.target.placeholder = "")}
              onClick={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "Email")}
            />
            <input
              type="password"
              placeholder="Password"
              onFocus={e => (e.target.placeholder = "")}
              onClick={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "Password")}
            />
            {props.view === "signup" ? (
              <input
                type="password"
                placeholder="Confirm Password"
                onFocus={e => (e.target.placeholder = "")}
                onClick={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "Confirm Password")}
              />
            ) : (
              ""
            )}

            <button
              className={props.view === "login" ? "" : "signup-button"}
              type="submit"
            >
              {props.view === "login" ? "Log In" : "Sign Up"}
            </button>
            {props.view === "login" ? (
              <div className="keep-logged-in">
                <p>Need an account?</p>
                <Link to="/signup">Sign Up</Link>
              </div>
            ) : (
              ""
            )}
          </div>
          {props.view === "login" ? (
            <div className="social-media">
              <a href="/auth/google">
                <img
                  src={logo}
                  alt="Google Sign In"
                />
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
