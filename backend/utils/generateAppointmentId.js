const Counter = require("../models/Counter");

async function generateAppointmentId() {
  try {
    const now = new Date();

    const yy = now.getFullYear().toString().slice(-2);
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");

    const dateKey = `${yy}${mm}${dd}`;

    console.log("📅 Generating Appointment ID for date:", dateKey);

    const counter = await Counter.findOneAndUpdate(
      { date: dateKey },
      { $inc: { seq: 1 } },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );

    if (!counter) {
      console.error("❌ Counter update failed");
      throw new Error("Failed to generate appointment sequence");
    }

    const sequence = String(counter.seq).padStart(4, "0");

    const appointmentId = `BMC-APT-${dateKey}-${sequence}`;

    console.log("✅ Generated Appointment ID:", appointmentId);

    return appointmentId;

  } catch (error) {
    console.error("❌ Appointment ID Generation Error:", error);
    console.error("❌ FULL STACK:", error.stack);
    throw error;
  }
}

module.exports = generateAppointmentId;