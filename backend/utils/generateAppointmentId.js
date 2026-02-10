const Counter = require("../models/Counter");

async function generateAppointmentId() {
  const now = new Date();

  const yy = now.getFullYear().toString().slice(-2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");

  const dateKey = `${yy}${mm}${dd}`;

  const counter = await Counter.findOneAndUpdate(
    { date: dateKey },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );

  const sequence = String(counter.seq).padStart(4, "0");

  return `BMC-APT-${dateKey}-${sequence}`;
}

module.exports = generateAppointmentId;
