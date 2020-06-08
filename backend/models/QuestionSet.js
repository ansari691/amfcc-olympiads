const mongoose = require("mongoose");

const QuestionSetSchema = new mongoose.Schema({
  examId : { type : String, required : true },
  set : { type : String, required : true },
  mcqs : [
    {
        question : { type : String },
        a : { type : String },
        b : { type : String },
        c : { type : String },
        d : { type : String },
        answer : { type : String }
    }
  ]
});

module.exports = Student = mongoose.model("questionSet", QuestionSetSchema);
