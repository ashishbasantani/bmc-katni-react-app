const express = require("express");
const router = express.Router();
const Enquiry = require("../models/enquiry");

/* ------------------ CREATE ENQUIRY ------------------ */
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, enquiry, agree } = req.body;

    if (!name || !email || !phone || !enquiry || !agree) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newEnquiry = new Enquiry({
      name,
      email,
      phone,
      enquiry,
      agree,
    });

    await newEnquiry.save();

    res.status(201).json({
      success: true,
      message: "Enquiry saved successfully",
    });
  } catch (error) {
    console.error("Enquiry Save Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

module.exports = router;
