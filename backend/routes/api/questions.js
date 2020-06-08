const express = require("express");
const { check, validationResult } = require("express-validator");
const QuestionSet = require("../../models/QuestionSet");
const fs = require("fs");
const generateSequence = require('../../services/DatabaseSequence');
const adminAuth = require("../../middleware/adminAuth");

const router = express.Router();

//register a question set
router.post(
  "/",
  [ 
    check("examId", "exam id"),
    check("set", "set is required"),
    check("mcq.question", "question is required").notEmpty(),
    check("mcq.a", "a is required").notEmpty(),
    check("mcq.b", "b is required").notEmpty(),
    check("mcq.c", "c is required").notEmpty(),
    check("mcq.d", "d is required").notEmpty(),
    check("mcq.answer", "answer is required").notEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { examId,set, mcq } = req.body;
    try {
      let questionSet = await QuestionSet.findOne({ examId, set });

      if (questionSet) {
        // return res.status(400).json({
        //   errors: [{ msg: "same set already exists" }],
        // });
        questionSet.mcqs.push(mcq);
        await questionSet.save();
        return res.json(questionSet);
      }

      question = new QuestionSet({
          examId,
          set
      });
      question.mcqs = [ mcq ];
      await question.save();
      res.json(question);
    } catch {
      return res.status(500).json({ errors: errors.message });
    }
  }
);

//get all questions
router.get("/", async (req, res) => {
  let question = await QuestionSet.find();
  res.json(question);
});

//get question sets by exam id
router.get("/:examId", async (req, res) => {
  const questionSets = await QuestionSet.find({examId : req.params.examId});
  return res.json(questionSets);
})

//delete a question by id
router.delete("/:id/:questionId", async (req, res) => {
  const questionSet = await QuestionSet.findById(req.params.id);
  questionSet.mcqs = questionSet.mcqs.filter(mcq => mcq._id != req.params.questionId);
  questionSet.save();
  return res.json(questionSet);
})

module.exports = router;
