const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    jobTitle: { type: String, required: true },
    content: { type: String, unique: false, required: true },
    adImage: { type: String, required: true },
    // description: { type: String, required: true },
    // declaration: { type: String, required: true },
    // admitCardLink: { type: String, required: true },
    // file: { type: String, required: true },
    // adPoster: { type: String, required: true },
  },
  { timestamps: true }
);

const AdmitCard = mongoose.model("AdmitCard", userSchema);

module.exports = AdmitCard;
