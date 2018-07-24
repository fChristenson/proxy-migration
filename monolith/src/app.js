const express = require("express");
const app = express();

app.get("/api/v1/users", (req, res) => {
  res.json(["bob", "anna"]);
});

app.get("/api/v1/books", (req, res) => {
  res.json(["Clean code", "50 shades of grey"]);
});

app.get("/api/v1/cars", (req, res) => {
  res.json(["Volvo", "Some less safe car"]);
});

app.get("/api/v1/legacy", (req, res) => {
  res.json({ message: "This is a legacy endpoint" });
});

module.exports = app;
