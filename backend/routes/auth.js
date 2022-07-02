const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("Test API Auth.");
});

module.exports = router;
