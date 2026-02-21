const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ to, subject, html }) => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: to,        // string
      subject: subject,
      html: html,
    });

    console.log("✅ Email sent");
  } catch (error) {
    console.error("❌ Email error:", error.response?.data || error.message);
  }
};

module.exports = sendEmail;
