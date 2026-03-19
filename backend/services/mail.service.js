const nodemailer = require("nodemailer");

/* ------------------ ENV VALIDATION ------------------ */
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("❌ EMAIL_USER or EMAIL_PASS missing in .env");
}

/* ------------------ TRANSPORTER ------------------ */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // IMPORTANT
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ------------------ VERIFY CONNECTION ------------------ */
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Mail Server Connection Failed:");
    console.error(error);
  } else {
    console.log("✅ Mail Server is Ready to Send Emails");
  }
});

module.exports = transporter;