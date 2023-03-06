const express = require("express");
const app = express();
const showCategory = require("./src/DataBase/Routes/showCategory");
const showProducts = require("./src/DataBase/Routes/showProducts");
const cors = require("cors");
var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(cors());

app.use(express.json());
app.use(showCategory);
app.use(showProducts);

module.exports = app;
