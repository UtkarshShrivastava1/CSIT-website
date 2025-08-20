const express = require("express");
const router = express.Router();
const { submitEnquiryForm } = require("../controllers/enquiryFormController");

// POST /api/enquiry/submit
router.post("/submit", submitEnquiryForm);

module.exports = router;
