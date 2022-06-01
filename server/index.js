const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const router = require("./router/router");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/upload", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
