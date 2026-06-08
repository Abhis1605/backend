const urlModel = require("../models/url.model");
const generateId = require("../utils/generateId");

async function createShortUrl(req, res) {
  try {
    const { originalUrl } = req.body;

    const existing = await urlModel.findOne({ originalUrl });

    if (existing) {
      return res.status(200).json({
        shortUrl: `${process.env.BASE_URL}/${existing.shortCode}`
      });
    }

    let shortCode;
    
    do {
      shortCode = generateId();
    } while (await urlModel.findOne({ shortCode }));


    const newUrl = await urlModel.create({
        originalUrl,
        shortCode
    })

    res.status(201).json({
        message: "Short URL created successfully",
        shortUrl: `${process.env.BASE_URL}/${shortCode}`
    })

  } catch (error) {
    res.status(500).json({
        message: error.message
    })
  }
}

async function getAllUrls(req, res) {
  try {
    const urls = await urlModel
      .find()
      .sort({ createdAt: -1 }); // latest first

    const formattedUrls = urls.map((url) => ({
      originalUrl: url.originalUrl,
      shortCode: url.shortCode,
      shortUrl: `${process.env.BASE_URL}/${url.shortCode}`,
      clicks: url.clicks,
      createdAt: url.createdAt
    }));

    res.status(200).json(formattedUrls);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}

module.exports = { createShortUrl, getAllUrls }
