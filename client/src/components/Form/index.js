import React from "react";
import { Link } from "react-router-dom";

const Form = props => {
  return (
    <div className="form-container">
      <form action="">
        {props.view === "login" ? (
          <h1>Log In To Your Account</h1>
        ) : (
          <h1>Sign Up for an Account</h1>
        )}

        <div className="main">
          <div className="local-login">
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
            {props.view === "login" ? (
              <div className="keep-logged-in">
                <p>Need an account?</p>
                <Link to="/signup">Sign Up</Link>
              </div>
            ) : (
              ""
            )}

            <button type="submit">Log In</button>
          </div>
          <div className="social-media">
            <a href="/auth/google">Sign in with Google</a>
            {/* <a href="#">Facebook</a> */}
            {/* <a href="#">Github</a> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
