import React from "react";
import { Redirect } from "react-router-dom";
import "./style.css";

import Alliance from "../../components/Alliance";

const ChooseAllegiance = props => {
  return props.user ? (
    <div className="choose-allegiance">
      <Alliance type={0} setAllegiance={props.setAllegiance} />
      <Alliance type={1} setAllegiance={props.setAllegiance} />
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default ChooseAllegiance;
