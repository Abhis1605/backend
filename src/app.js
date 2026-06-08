const express = require("express");
const cors = require("cors");
const urlRoutes = require("../src/routes/url.routes");
const redirectRoutes = require("../src/routes/redirect.routes")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", urlRoutes)
app.use("/", redirectRoutes)

module.exports = app;