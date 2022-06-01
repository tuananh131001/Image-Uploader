const express = require("express");
const app = express();
const port = 5000;
const upload = require("../uploadMiddleware");
const router = express.Router();
const path = require("path");
router.get("/", async function (req, res) {
  await res.render("index");
});
router.post("/", upload.single("image"), async function (req, res) {
  console.log(res.req.file.filename);
  return res.status(200).json({ image_link: res.req.file.filename });
});
module.exports = router;
