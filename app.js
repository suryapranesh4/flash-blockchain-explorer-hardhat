const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("App get /");
  res.json({ hello: "world" });
});

module.exports = app;
