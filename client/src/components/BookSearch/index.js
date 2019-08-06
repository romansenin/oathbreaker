import React, { Component } from "react";
import "./BookSearch.css";

import API from "../../utils/API";

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.renderSpinner();
    if (this.state.value.trim() === "") {
      this.props.handleEmptySearch();
    } else {
      API.searchBooks(this.state.value.trim()).then(res => {
        this.props.handleSearch(res.data.items);
      });
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="bookSearch">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Book Search</h5>
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="bookInput">Book</label>
                <input
                  type="text"
                  autoComplete="off"
                  className="form-control"
                  id="bookInput"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                <span className="fa fa-search"> Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BookSearch;
