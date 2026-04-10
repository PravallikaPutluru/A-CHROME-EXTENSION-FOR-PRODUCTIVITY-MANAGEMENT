const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  blockedSites: [String]
});

module.exports = mongoose.model("User", UserSchema);
