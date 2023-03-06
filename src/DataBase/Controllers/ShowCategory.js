const { database } = require("../Database");

function showCategory(category) {
  let filter = database.filter(el => el.category === category.category);
  return filter;
}

module.exports = showCategory;
