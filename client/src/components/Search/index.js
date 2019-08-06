import React, { Component } from "react";
import BookSearch from "../BookSearch";
import Results from "../Results";

class Search extends Component {
  render() {
    return(
      <div>
      <BookSearch handleSearch={this.props.handleSearch} handleEmptySearch={this.props.handleEmptySearch} renderSpinner={this.props.renderSpinner}/>
      <Results content={this.props.books} getSavedBooks={this.props.getSavedBooks}/>
      </div>
    );
  }
}

export default Search;