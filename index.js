const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("GET request!");
});

app.post("/", (req, res) => {
  res.send("POST request!");
});

app.put("/", (req, res) => {
  res.send("PUT request!");
});

app.delete("/", (req, res) => {
  res.send("DELETE request!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
