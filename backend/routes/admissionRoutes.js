const express = require("express");
const router = express.Router();
const {
  submitAdmissionForm,
} = require("../controllers/admissionFormController");

// POST /api/admission/submit
router.post("/submit", submitAdmissionForm);

module.exports = router;
