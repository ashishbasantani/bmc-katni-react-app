const express = require("express");
const router = express.Router();
const axios = require("axios");

const Appointment = require("../models/Appointment");
const transporter = require("../services/mail.service");
const generateAppointmentId = require("../utils/generateAppointmentId");

/* =========================
   WhatsApp Send Function
========================= */
async function sendWhatsAppMessage(to, message) {
  try {
    if (!to) {
      console.log("No phone number provided");
      return;
    }

    const cleanedNumber = to.replace(/\D/g, "");
    const formattedNumber = cleanedNumber.startsWith("91")
      ? cleanedNumber
      : "91" + cleanedNumber;

    console.log("Sending WhatsApp to:", formattedNumber);

    await axios.post(
      `https://graph.facebook.com/v18.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to: formattedNumber,
        type: "text",
        text: { body: message },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ WhatsApp message sent");
  } catch (error) {
    console.error("❌ FULL ERROR STACK:");
    console.error(error.stack);
  }
}

/* =========================
   Appointment Confirm Route
========================= */
router.post("/confirm", async (req, res) => {
  try {
    console.log("📥 Incoming Appointment Request:", req.body);

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

    /* ------------------ Validation ------------------ */
    if (
      !department ||
      !appointmentType ||
      !doctor ||
      !date ||
      !time ||
      !name ||
      !age ||
      !gender ||
      !phone ||
      !email
    ) {
      console.log("❌ Missing required fields");
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    /* ------------------ Generate Appointment ID ------------------ */
    // const appointmentId = await generateAppointmentId();
    const appointmentId = "APT-" + Date.now();
    console.log("Generated Appointment ID:", appointmentId);

    /* ------------------ Save to Database ------------------ */
    const savedAppointment = await Appointment.create({
      appointmentId,
      department,
      appointmentType,
      doctor,
      date,
      time,
      name,
      age: Number(age),
      gender,
      phone,
      email,
      reason,
      medications,
      allergies,
    });

    console.log("✅ Appointment Saved:", savedAppointment._id);

    /* =========================
       Send Email
    ========================= */

    const emailHTML = `
      <h2>🩺 Appointment Confirmed</h2>
      <p><b>Appointment ID:</b> ${appointmentId}</p>
      <hr />
      <p><b>Department:</b> ${department}</p>
      <p><b>Doctor:</b> ${doctor}</p>
      <p><b>Date:</b> ${date}</p>
      <p><b>Time:</b> ${time}</p>
      <hr />
      <h3>👤 Patient Details</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Phone:</b> ${phone}</p>
    `;

    await transporter.sendMail({
      from: `"BMC Katni" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Appointment Confirmed | ${appointmentId}`,
      html: emailHTML,
    });

    console.log("✅ Confirmation Email Sent");

    /* =========================
       Send WhatsApp Message
    ========================= */

    const whatsappMessage = `
Appointment Confirmed 🩺

Appointment ID: ${appointmentId}

Doctor: ${doctor}
Date: ${date}
Time: ${time}

Patient: ${name}

Thank you for choosing BMC Katni.
`;

    await sendWhatsAppMessage(phone, whatsappMessage);

    /* ------------------ Final Response ------------------ */

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
    console.error("❌ FULL STACK:", error.stack);

    res.status(500).json({
      success: false,
      message: "Failed to book appointment",
      error: error.message,
    });
  }
});

module.exports = router;