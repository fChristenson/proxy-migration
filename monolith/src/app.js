const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json(["bob", "anna"]);
});

app.get("/books", (req, res) => {
  res.json(["Clean code", "50 shades of grey"]);
});

app.get("/cars", (req, res) => {
  res.json(["Volvo", "Some less safe car"]);
});

module.exports = app;
