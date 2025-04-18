const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const scheduleRoutes = require("./routes/schedule");
const historyRoute = require("./routes/history");
const analyticsRoutes = require("./routes/analytics");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api", scheduleRoutes);
app.use("/api/history", historyRoute);
app.use("/api/analytics", analyticsRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch(err => console.error("MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
