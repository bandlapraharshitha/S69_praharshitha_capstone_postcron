const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const scheduleInstagramPost = require("../utils/schedulePost");
const Post = require("../models/Post"); // ✅ Import Post model

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });



// Fetch all scheduled posts
router.get("/scheduled-posts", async (req, res) => {
  try {
    const posts = await Post.find({ status: "scheduled" }).sort({ scheduledAt: 1 }); // This is where we sort by scheduledAt
    res.json({ success: true, posts });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch scheduled posts" });
  }
});

module.exports = router;
