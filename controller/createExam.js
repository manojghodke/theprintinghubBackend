// const path = require("path");
// const fs = require("fs");
const Exam = require("../models/Exam");

exports.createExam = async (req, res) => {
  try {
    const { jobTitle, adImage, content } = req.body;

    // Basic validation
    if (!jobTitle || !adImage || !content) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "All fields (jobTitle, and date) are required.",
      });
    }

    const newExam = new Exam({
      // jobTitle,
      // date,
      jobTitle,
      adImage,
      content,
    });

    const result = await newExam.save();

    return res.status(201).json({
      success: true,
      status: 201,
      message: "Exam created successfully",
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
