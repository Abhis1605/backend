const express = require("express")
const router = express.Router()

const { createShortUrl, getAllUrls } = require("../controllers/url.controllers");
const validateUrl = require("../middlewares/validateUrl");


router.post("/shorten", validateUrl, createShortUrl)

router.get("/urls", getAllUrls)

module.exports = router