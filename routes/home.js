// libraries
const express = require("express");
const router = express.Router();

// controllers
const { home } = require("../controllers/home");

router.post("/", home);

module.exports = router;
