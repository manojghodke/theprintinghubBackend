const path = require("path");
const fs = require("fs");
const Exam = require("../models/Post");

// Controller function to create a new Exam
exports.createPost = async (req, res) => {
  try {
    const { content } = req.body;

    // Basic validation
    if (!content) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Plz enter content.",
      });
    }

    const newContent = new Exam({
      content,
    });

    const result = await newContent.save();

    return res.status(201).json({
      success: true,
      status: 201,
      message: "Content created successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      success: false,
      status: 500,
      message: "Internal server error. Please check the server logs.",
    });
  }
};
