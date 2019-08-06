const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const BookSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  // `authors` is not required and of type Array (object)
  authors: {
    type: Array,
    required: false
  },
  // `description` is not required and of type String
  description: {
    type: String,
    required: false
  },
  // `image` is not required and of type String
  image: {
    type: String,
    required: false
  },
  // `link` is required and of type String
  link: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
const Book = mongoose.model("Book", BookSchema);

// Export the Book model
module.exports = Book;
