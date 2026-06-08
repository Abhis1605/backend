const express = require("express");
const cors = require("cors");
const urlRoutes = require("../src/routes/url.routes")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", urlRoutes)

module.exports = app;