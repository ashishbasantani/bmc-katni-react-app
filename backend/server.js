require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const appointmentRoutes = require("./routes/appointment.routes");
const enquiryRoutes = require("./routes/enquiry.routes");

const app = express();

/* ------------------ MIDDLEWARE ------------------ */
app.use(cors());
app.use(express.json());

/* ------------------ DATABASE ------------------ */
const mongoURI = process.env.MONGO_URI_PROD;

if (!mongoURI) {
  console.error("❌ MONGO_URI_PROD is missing in .env file");
  process.exit(1);
}

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });

/* ------------------ ROUTES ------------------ */
app.use("/api/appointment", appointmentRoutes);
app.use("/api/enquiry", enquiryRoutes);

/* ------------------ HEALTH CHECK ------------------ */
app.get("/", (req, res) => {
  console.log("🌐 Health check route hit");
  res.status(200).json({ message: "Backend is running successfully" });
});

/* ------------------ GLOBAL ERROR HANDLER ------------------ */
app.use((err, req, res, next) => {
  console.error("🔥 Global Error Handler:", err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: err.message,
  });
});

/* ------------------ SERVER ------------------ */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});

/* ------------------ ENV DEBUG LOGS ------------------ */
console.log("TOKEN:", process.env.WHATSAPP_TOKEN ? "Loaded" : "Missing");
console.log("PHONE ID:", process.env.WHATSAPP_PHONE_NUMBER_ID);
console.log("Connected URI:", mongoURI);