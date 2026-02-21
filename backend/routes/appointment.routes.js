const express = require("express");
const router = express.Router();
const axios = require("axios");

const Appointment = require("../models/Appointment");
const sendEmail = require("../services/mail.service");
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
    console.error("❌ WhatsApp Error:", error.response?.data || error.message);
  }
}

/* =========================
   Appointment Confirm Route
========================= */

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

    if (!department || !date || !time || !name || !phone || !email) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const appointmentId = await generateAppointmentId();

    await Appointment.create({
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

    /* Send Email */

    const emailHTML = `
      <h2>🩺 Appointment Confirmed</h2>
      <p><b>Appointment ID:</b> ${appointmentId}</p>
      <hr />
      <p><b>Department:</b> ${department}</p>
      <p><b>Doctor:</b> ${doctor || "To be assigned"}</p>
      <p><b>Date:</b> ${date}</p>
      <p><b>Time:</b> ${time}</p>
      <hr />
      <h3>👤 Patient Details</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Phone:</b> ${phone}</p>
    `;

    await sendEmail({
      to: email,
      subject: `Appointment Confirmed | ${appointmentId}`,
      html: emailHTML,
    });

    /* Send WhatsApp */

    const whatsappMessage = `
Appointment Confirmed 🩺

Appointment ID: ${appointmentId}
Doctor: ${doctor || "To be assigned"}
Date: ${date}
Time: ${time}

Patient: ${name}

Thank you for choosing BMC Katni.
`;

    await sendWhatsAppMessage(phone, whatsappMessage);

    return res.status(200).json({
      success: true,
      appointmentId,
      doctor,
      patient: name,
      date,
      time,
    });

  } catch (error) {
    console.error("❌ Appointment Booking Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to book appointment",
    });
  }
});

module.exports = router;
