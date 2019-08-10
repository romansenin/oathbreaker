import React from "react";

const Form = () => {
  return (
    <div className="form-container">
      <form action="">
        <h1>Log In To Your Account</h1>
        <div className="main">
          <div className="local-login">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="keep-logged-in">
              <input type="checkbox" id="keepLoggedIn" name="keepLoggedIn" />
              <label htmlFor="keepLoggedIn">
                Keep me logged in for 30 days
              </label>
            </div>
            <a href="">Forgot password?</a>
            <button type="submit">Log In</button>
          </div>
          <div className="social-media">
            <a href="#">Google</a>
            <a href="#">Facebook</a>
            <a href="#">Github</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
