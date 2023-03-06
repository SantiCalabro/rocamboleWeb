const router = require("express").Router();
const showCategory = require("../Controllers/ShowCategory");

router.get("/api/:category", (req, res) => {
  let category = req.params;

  try {
    res.status(200).json(showCategory(category));
  } catch (error) {
    res.status(404).json({ error: "Todo mal" });
  }
});

module.exports = router;
