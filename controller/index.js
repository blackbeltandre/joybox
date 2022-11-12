const bookService = require("../services/books/v1.0");
const request = require("request");
require("dotenv").config();

exports.index = async function (req, res) {
  const books  = await bookService.getBooks();
  console.log(books.works[0]);
  return res.json(books);
};
