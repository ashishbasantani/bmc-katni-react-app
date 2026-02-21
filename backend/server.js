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
// const mongoURI =
//   process.env.NODE_ENV === "production"
//     ? process.env.MONGO_URI_PROD
//     : process.env.MONGO_URI_LOCAL;

const mongoURI = process.env.MONGO_URI_PROD;
mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// mongoose
//   .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/bmc")
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB error:", err));

/* ------------------ ROUTES ------------------ */
app.use("/api/appointment", appointmentRoutes);
app.use("/api/enquiry", enquiryRoutes);


/* ------------------ SERVER ------------------ */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
console.log("TOKEN:", process.env.WHATSAPP_TOKEN ? "Loaded" : "Missing");
console.log("PHONE ID:", process.env.WHATSAPP_PHONE_NUMBER_ID);
console.log("Connected URI:", mongoURI);
