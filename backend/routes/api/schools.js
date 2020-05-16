const express = require("express");
const { check, validationResult } = require("express-validator");
const School = require("../../models/School");
const fs = require("fs");

const router = express.Router();

//registering a school
router.post(
  "/",
  [
    check("schoolEmail", "enter email in correct format").isEmail(),
    check("schoolPhone", "phone is required in correct format")
      .isMobilePhone("en-IN"),
    check("schoolName", "name is required").notEmpty(),
    check("schoolAddress", "address is required")
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { schoolName, schoolEmail, schoolPhone, schoolAddress } = req.body;

    try {
      if (schoolName) {
        let user = await User.findOne({ phone });

        if (user) {
          return res
            .status(400)
            .json({ errors: [{ msg: "school with same school name already exists" }] });
        }
      }

      school = new School({
        schoolName,
        schoolEmail,
        schoolPhone,
        schoolAddress
      });

      await school.save();
      res.json(school);
    } catch {
      res.status(500).json({ errors: errors.message });
    }
  }
);



//get all users
router.get("/", async (req, res) => {
  let school = await School.find();
  res.json(school);
});


module.exports = router;
