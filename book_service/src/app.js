const express = require("express");
const app = express();

app.get("/books", (req, res) => {
  res.json(["Clean code", "50 shades of grey", "from service"]);
});

module.exports = app;
