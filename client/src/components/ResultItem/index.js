import React from "react";
import "./ResultItem.css";

import API from "../../utils/API";

const ResultItem = props => {
  const book = props.children;
  return (
    <div className="result-item">
      <div className="top-wrapper">
        <section className="main-details">
          <h1>{book.title}</h1>
          {book.authors !== undefined ? <h3>{book.authors.join(", ")}</h3> : ""}
        </section>
        <section className="buttons">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={book.previewLink}
            className="btn btn-primary"
          >
            View
          </a>
          <button
            className="btn btn-danger"
            onClick={() => {
              if (
                book.imageLinks !== undefined &&
                book.imageLinks.thumbnail !== undefined
              ) {
                book.image = book.imageLinks.thumbnail;
              }
              book.link = book.previewLink;
              console.log(book);
              API.saveBook(book).then(() => {
                props.getSavedBooks();
              }).catch((err) => console.log(err));
            }}
          >
            Save
          </button>
        </section>
      </div>
      <section className="description">
        {book.imageLinks !== undefined &&
        book.imageLinks.thumbnail !== undefined ? (
          <img src={book.imageLinks.thumbnail} alt={book.title} />
        ) : (
          ""
        )}
        <p>{book.description}</p>
      </section>
    </div>
  );
};

export default ResultItem;
