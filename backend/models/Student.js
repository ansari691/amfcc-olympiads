const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  schoolName: { type: String, required : true },
  studentName: { type: String, required : true },
  dob: { type: Date, required : true },
  standard: { type: String, required : true },
  div: { type: String, required : true },
  rollNo: { type: Number, required : true },
  studentPhone: { type: Number, required : true },
  teacherPhone: { type: Number, required : true },
  feesAmount: { type: Number },
  feesReceiptNo: { type: Number },
  loginId: { type : String, required : true },
  password: { type : String }
});

module.exports = Student = mongoose.model("student", StudentSchema);
