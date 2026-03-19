const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to, subject, html) => {
  try {
    const response = await resend.emails.send({
      from: "BMC Katni <onboarding@resend.dev>", // default test sender
      to: [to],
      subject: subject,
      html: html,
    });

    console.log("✅ Email sent via Resend:", response);
  } catch (error) {
    console.error("❌ Resend Email Error:", error);
  }
};

module.exports = sendEmail;