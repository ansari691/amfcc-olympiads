const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
  examId : { type : String, required : true },
  examName: { type: String, required : true },
  examDuration: { type: Number, required : true },
  numberOfQuestions: { type: Number, required : true },
  passingCriteria: { type: Number, required : true },
  standard: { type: String, required : true }
});

module.exports = Student = mongoose.model("exam", ExamSchema);
