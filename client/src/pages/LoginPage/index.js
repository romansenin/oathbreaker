import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.css";

import Form from "../../components/Form";

const LoginPage = props => {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <Form view="login" loginMessage={props.location.state ? true : false} />
      </div>
    </div>
  );
};

export default withRouter(LoginPage);
