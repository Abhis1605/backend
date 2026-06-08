require("dotenv").config();
const app = require("../backend/src/app");
const connectDB = require("../backend/src/db/db");

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});