const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    appointmentId: { type: String, unique: true },
    department: String,
    appointmentType: String,
    doctor: String,
    date: String,
    time: String,
    name: String,
    email: String,
    phone: String,
    age: String,
    gender: String,
    reason: String,
    medications: String,
    allergies: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
