require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const bfhlRoutes = require("./routes/bfhl");
const healthRoutes = require("./routes/health");

app.use("/bfhl", bfhlRoutes);
app.use("/health", healthRoutes);

// Export app for Vercel
module.exports = app;
