const validator = require("validator");

const validateUrl = (req, res, next) => {
  const { originalUrl } = req.body;

  if (
    !originalUrl ||
    !validator.isURL(originalUrl, {
      protocols: ["http", "https"],
      require_protocol: true,
    })
  ) {
    return res.status(400).json({
      message: "URL must include http:// or https://",
    });
  }

  next();
};

module.exports = validateUrl;
