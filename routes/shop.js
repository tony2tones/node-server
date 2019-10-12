const express = require('express');

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("<h1>Hello peeps to the base of express</h1>");
  });

  module.exports = router;