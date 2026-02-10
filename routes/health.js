const express = require("express");
const router = express.Router();
const { healthCheck } = require("../controllers/bfhlController"); 
// ✅ use bfhlController if healthCheck is defined there

// GET /health
router.get("/", healthCheck);

module.exports = router;
