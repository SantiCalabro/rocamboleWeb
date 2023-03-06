const { database } = require("../Database");

function showProducts() {
  return database;
}

module.exports = showProducts;
