const express = require("express");
const { check, validationResult } = require("express-validator");
const Student = require("../../models/Student");
const fs = require("fs");
const adminAuth = require("../../middleware/adminAuth");

const router = express.Router();

//registering a student
router.post(
  "/register",
  [
    check("schoolName", "school name is required").notEmpty(),
    check("studentName", "student name is required").notEmpty(),
    check("standard", "standard is required").notEmpty(),
    check("div", "division is required").notEmpty(),
    check("studentPhone", "phone number is required").notEmpty(),
    check("teacherPhone", "phone number is required").notEmpty(),
    check("feesAmount", "fees amount is required").notEmpty(),
    check("feesReceiptNo", "fees receipt is required").notEmpty(),
    check("dob", "date of birth is required").notEmpty(),
    check("rollNo", "roll number is required").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { standard, div, rollNo } = req.body;

    try {
      let student = await Student.findOne({ standard, div, rollNo });

      if (student) {
        return res.status(400).json({
          errors: [{ msg: "student with same roll number already exists" }],
        });
      }

      student = new Student(req.body);

      student.loginId = standard + div + rollNo;

      await student.save();
      student.password = JSON.stringify(student._id).slice(17, 24);
      await student.save();
      res.json(student);
    } catch {
      return res.status(500).json({ errors: errors.message });
    }
  }
);

//get all students
router.get("/", async (req, res) => {
  let student = await Student.find();
  res.json(student);
});

module.exports = router;
