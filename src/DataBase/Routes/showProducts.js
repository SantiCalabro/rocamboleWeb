const router = require("express").Router();
const showProducts = require("../Controllers/ShowProducts");

router.get("/api", (req, res) => {
  try {
    res.status(200).json(showProducts());
  } catch (error) {
    res
      .status(404)
      .json({ error: "!Algo salió mal! ¡Volvé a visitarnos más tarde!" });
  }
});

module.exports = router;
