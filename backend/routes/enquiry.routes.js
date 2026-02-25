const express = require("express");
const router = express.Router();
const Enquiry = require("../models/enquiry");

/* ------------------ CREATE ENQUIRY ------------------ */
router.post("/", async (req, res) => {
  try {
    console.log("📥 Incoming Enquiry:", req.body);

    const { name, email, phone, enquiry, agree } = req.body;

    /* ------------------ Validation ------------------ */
    if (!name || !email || !phone || !enquiry) {
      console.log("❌ Missing required fields");
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (agree !== true) {
      console.log("❌ User did not agree to terms");
      return res.status(400).json({
        success: false,
        message: "You must agree before submitting",
      });
    }

    /* ------------------ Save Enquiry ------------------ */
    const newEnquiry = await Enquiry.create({
      name,
      email,
      phone,
      enquiry,
      agree,
    });

    console.log("✅ Enquiry Saved:", newEnquiry._id);

    res.status(201).json({
      success: true,
      message: "Enquiry saved successfully",
    });

  } catch (error) {
    console.error("❌ Enquiry Save Error:", error);
    console.error("❌ FULL STACK:", error.stack);

    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

module.exports = router;