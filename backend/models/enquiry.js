const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true },
    phone: { type: String, required: true },
    enquiry: { type: String, required: true }, // ✅ Added
    agree: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enquiry", enquirySchema);
