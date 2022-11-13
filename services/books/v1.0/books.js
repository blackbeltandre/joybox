const fetch = require("node-fetch");

exports.getBooks = async function getBooks(req, res) {
  const response = await fetch("https://openlibrary.org/subjects/love.json?details=true", {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

exports.borrowBooks = async function borrowBooks(body) {
    return body;
  };
