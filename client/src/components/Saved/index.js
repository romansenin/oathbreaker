import React, { Component } from "react";
import SavedBooks from "../SavedBooks";

class Saved extends Component {
  render() {
    return(
      <div>
      <SavedBooks content={this.props.books}/>
      </div>
    );
  }
}

export default Saved;