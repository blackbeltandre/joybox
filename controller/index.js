const bookService = require("../services/books/v1.0");
require("dotenv").config();

exports.index = async function (req, res) {
  const books  = await bookService.getBooks();
  return res.status(200).json(books);
};


exports.borrow = async function (req, res) {
  const books  = await bookService.getBooks();
  const key =  books.works[0].key;
  const title =  books.works[0].title;
  const edition_count =  books.works[0].edition_count;
  const cover_id =  books.works[0].cover_id;
  const cover_edition_key =  books.works[0].cover_edition_key;
  const subject =  books.works[0].subject[0];
  const requestBorrowing = new Date();
  const pickup_schedule = req.body.pickup_schedule;
  const body = {key,title,edition_count,cover_id,cover_edition_key,subject,requestBorrowing,pickup_schedule};
  const borrow  = await bookService.borrowBooks({...body});
  return res.status(200).json(borrow);
};

