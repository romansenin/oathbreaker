import React, { Component } from "react";
import "./style.css";

class MessageBox extends Component {
  render() {
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-md-7 m-box my-5">
          <span className="align-middle">
            <ul>
              {this.props.messages.map((value, index) => {
                return <li key={index}>{value}</li>;
              })}
            </ul>
          </span>
        </div>
      </div>
    );
  }
}

export default MessageBox;
