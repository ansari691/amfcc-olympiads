const express = require("express");
const { check, validationResult } = require("express-validator");
const Exam = require("../../models/Exam");
const fs = require("fs");
const generateSequence = require('../../services/DatabaseSequence');
const adminAuth = require("../../middleware/adminAuth");

const router = express.Router();

//registering a student
router.post(
  "/",
  [
    check("examName", "exam name is required").notEmpty(),
    check("examDuration", "exam duration is required").notEmpty(),
    check("numberOfQuestions", "number of questions is required").notEmpty(),
    check("passingCriteria", "passing criteria is required").notEmpty(),
    check("standard", "standard is required").notEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { examName } = req.body;
    try {
      let exam = await Exam.findOne({ examName });

      if (exam) {
        return res.status(400).json({
          errors: [{ msg: "exam with same name already exists" }],
        });
      }

      exam = new Exam(req.body);
      
      exam.examId = "EXAM" + await generateSequence("exam_sequence");
      await exam.save();
      res.json(exam);
    } catch {
      return res.status(500).json({ errors: errors.message });
    }
  }
);

//get all exams
router.get("/", async (req, res) => {
  let exam = await Exam.find();
  res.json(exam);
});

//get all sets of a exam
router.get("/sets/:examId", async (req, res) => {
  let exams = await Exam.find({ examId : req.params.examId });
  return res.json(exams);
})

module.exports = router;
