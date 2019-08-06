import React, { Component } from "react";
import ResultItem from "../ResultItem";
import FontAwesome from "react-fontawesome";
import "./Results.css";

class Results extends Component {
  constructor(props) {
    super(props);
    this.displayContent = this.displayContent.bind(this);
  }

  displayContent() {
    let content;
    if (this.props.content === undefined) {
      content = "No results found.";
    } else if (this.props.content.length === 0) {
      content = "Enter a book to search.";
    } else if (this.props.content === "spinner") {
      content = (
        <FontAwesome
          className="spinner"
          name="spinner"
          size="3x"
          spin
          style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
        />
      );
    } else {
      content = (
        <ul>
          {this.props.content.map((value, index) => {
            return <ResultItem key={index} getSavedBooks={this.props.getSavedBooks}>{value.volumeInfo}</ResultItem>;
          })}
        </ul>
      );
    }

    return content;
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Results</h5>
          <div
            className={
              this.props.content === undefined ||
              this.props.content.length === 0 ||
              this.props.content === "spinner"
                ? "results-wrapper"
                : ""
            }
          >
            {this.displayContent()}
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
