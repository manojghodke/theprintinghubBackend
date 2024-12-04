const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", userSchema);

module.exports = Post;
