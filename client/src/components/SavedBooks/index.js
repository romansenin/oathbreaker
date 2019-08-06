import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import ResultItem from "../ResultItem";
import "./SavedBooks.css";

class SavedBooks extends Component {
  constructor(props) {
    super(props);
    this.displayContent = this.displayContent.bind(this);
  }

  displayContent() {
    let content;
    if (this.props.content.length === 0) {
      content = "No books have been saved yet.";
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
            return <ResultItem key={index}>{value}</ResultItem>;
          })}
        </ul>
      );
    }

    return content;
  }

  render() {
    return (
      <div className="saved-books">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Saved Books</h5>
            <div className={
                this.props.content.length === 0 ||
                this.props.content === "spinner"
                ? "results-wrapper"
                : ""
            }>{this.displayContent()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SavedBooks;
