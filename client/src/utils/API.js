import axios from "axios";

export default {
  searchBooks: function(query) {
    return axios.get("/api/searchBooks", { params: { q: query } });
  },
  getBooks: function() {
    return axios.get("/api/getBooks");
  },
  saveBook: function(bookObj) {
    return axios.post("/api/saveBook", { data: bookObj });
  }
};
