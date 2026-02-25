const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      match: [/^[0-9]{10,15}$/, "Invalid phone number"],
    },

    enquiry: {
      type: String,
      required: true,
      trim: true,
    },

    agree: {
      type: Boolean,
      required: true,
      validate: {
        validator: function (v) {
          return v === true;
        },
        message: "You must agree before submitting",
      },
    },
  },
  { timestamps: true }
);

// Optional index for faster filtering by email
enquirySchema.index({ email: 1 });

module.exports = mongoose.model("Enquiry", enquirySchema);