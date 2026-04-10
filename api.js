const express = require("express");
const router = express.Router();
const Activity = require("../models/Activity");

// Save activity
router.post("/save", async (req, res) => {
  const { userId, site, timeSpent } = req.body;

  const activity = new Activity({ userId, site, timeSpent });
  await activity.save();

  res.json({ message: "Saved" });
});

// Get report
router.get("/report/:userId", async (req, res) => {
  const data = await Activity.find({ userId: req.params.userId });
  res.json(data);
});

module.exports = router;
