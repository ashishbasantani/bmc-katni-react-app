const express = require("express");
const router = express.Router();

const Appointment = require("../models/Appointment"); // ✅ IMPORTANT
const transporter = require("../services/mail.service");
const generateAppointmentId = require("../utils/generateAppointmentId");

router.post("/confirm", async (req, res) => {
  try {
    const {
      department,
      appointmentType,
      doctor,
      date,
      time,
      name,
      age,
      gender,
      phone,
      email,
      reason,
      medications,
      allergies,
    } = req.body;

    // ✅ Basic validation
    if (!department || !date || !time || !name || !phone || !email) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // ✅ Generate sequential appointment ID
    const appointmentId = await generateAppointmentId();

    // ✅ SAVE TO MONGODB (THIS WAS MISSING)
    const appointment = await Appointment.create({
      appointmentId,
      department,
      appointmentType,
      doctor,
      date,
      time,
      name,
      age,
      gender,
      phone,
      email,
      reason,
      medications,
      allergies,
    });

    // ✅ Email content
    const emailHTML = `
      <h2>🩺 Appointment Confirmed</h2>
      <p><b>Appointment ID:</b> ${appointmentId}</p>

      <hr />

      <p><b>Department:</b> ${department}</p>
      <p><b>Appointment Type:</b> ${appointmentType || "-"}</p>
      <p><b>Doctor:</b> ${doctor || "To be assigned"}</p>
      <p><b>Date:</b> ${date}</p>
      <p><b>Time:</b> ${time}</p>

      <hr />

      <h3>👤 Patient Details</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Age:</b> ${age || "-"}</p>
      <p><b>Gender:</b> ${gender || "-"}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Email:</b> ${email}</p>

      <p><b>Reason:</b> ${reason || "-"}</p>
      <p><b>Medications:</b> ${medications || "None"}</p>
      <p><b>Allergies:</b> ${allergies || "None"}</p>
    `;

    await transporter.sendMail({
      from: `"BMC Katni" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Appointment Confirmed | ${appointmentId}`,
      html: emailHTML,
    });

    // ✅ Response to frontend
    res.status(200).json({
      success: true,
      appointmentId,
      doctor,
      patient: name,
      date,
      time,
    });
  } catch (error) {
    console.error("❌ Appointment Booking Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to book appointment",
    });
  }
});

module.exports = router;
