const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    jobTitle: { type: String, required: true },
    content: { type: String, unique: false, required: true },
  },
  { timestamps: true }
); // Enable timestamps to track creation and update times

const CurrentNews = mongoose.model("CurrentNews", userSchema);

module.exports = CurrentNews;
