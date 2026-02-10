const Appointment = require("../models/Appointment");
const generateAppointmentId = require("../utils/generateAppointmentId");
const transporter = require("../services/mail.service");

exports.confirmAppointment = async (req, res) => {
  try {
    const appointmentId = await generateAppointmentId();

    const appointment = await Appointment.create({
      appointmentId,
      ...req.body,
    });

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
    } = appointment;

    const emailHTML = `
      <h2>🩺 Appointment Confirmed</h2>
      <p><b>Appointment ID:</b> ${appointmentId}</p>

      <hr />

      <p><b>Department:</b> ${department}</p>
      <p><b>Appointment Type:</b> ${appointmentType}</p>
      <p><b>Doctor:</b> ${doctor || "-"}</p>
      <p><b>Date:</b> ${date}</p>
      <p><b>Time:</b> ${time}</p>

      <hr />

      <h3>👤 Patient Details</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Age:</b> ${age}</p>
      <p><b>Gender:</b> ${gender}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Email:</b> ${email}</p>

      <p><b>Reason:</b> ${reason}</p>
      <p><b>Medications:</b> ${medications || "None"}</p>
      <p><b>Allergies:</b> ${allergies || "None"}</p>
    `;

    await transporter.sendMail({
      from: `"BMC Katni" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Appointment Confirmed | ${appointmentId}`,
      html: emailHTML,
    });

    res.status(200).json({
      success: true,
      appointmentId,
      doctor,
      patient: name,
      date,
      time,
    });
  } catch (error) {
    console.error("❌ Booking Error:", error);
    res.status(500).json({ success: false });
  }
};
