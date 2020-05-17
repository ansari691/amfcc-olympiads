const express = require("express");
const { check, validationResult } = require("express-validator");
const Student = require("../../models/Student");
const fs = require("fs");
const adminAuth = require('../../middleware/adminAuth');

const router = express.Router();

//registering a student
router.post("/register", async (req, res) => {
  const { schoolName, studentName, dob, standard, div, rollNo, studentPhone, teacherPhone, feesAmount, feesRecieptNo } = req.body;

  try {
      let student = await Student.findOne({ standard, div, rollNo });

      if (student) {
        return res
          .status(400)
          .json({
            errors: [{ msg: "student with same roll number already exists" }],
          });
      }

    student = new Student({
      schoolName, studentName, dob, standard, div, rollNo, studentPhone, teacherPhone, feesAmount, feesRecieptNo
    });

    student.loginId = standard + div + rollNo;

    await student.save();
    student.password = JSON.stringify(student._id).slice(17,24)
    await student.save();
    res.json(student);
  } catch (errors){
    res.status(500).json({ errors: errors.message });
  }
});

//get all students
router.get("/", adminAuth, async (req, res) => {
  let student = await Student.find();
  res.json(student);
});

module.exports = router;
