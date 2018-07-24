const express = require("express");
const app = express();

app.get("/api/v2/users", (req, res) => {
  res.json(["bob", "anna", "from service"]);
});

module.exports = app;
