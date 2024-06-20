const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});

mongoose
  .connect(
    `mongodb+srv://rashad:abtFF9-GNE8BAVc@cluster0.7kcudao.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
    // Example app listening on port ${port}
  })
  .catch((err) => {
    console.log(err);
  });
