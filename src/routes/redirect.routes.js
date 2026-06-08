const express = require("express");
const router = express.Router();

const { redirectUrl } = require("../controllers/url.controllers");

router.get("/:code", redirectUrl);

module.exports = router;