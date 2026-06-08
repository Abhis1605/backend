const { nanoid } = require("nanoid");

const generateId = () => nanoid(6);

module.exports = generateId;