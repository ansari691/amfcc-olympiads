const mongoose = require("mongoose");

const SchoolSchema = new mongoose.Schema({
  _id : { type : String, required : true },
  schoolName: { type: String },
  schoolEmail: { type: String },
  schoolPhone: { type: Number },
  schoolAddress: {
    addressType: String,
    landmark: String,
    area: String,
    street: String,
    pincode: String,
  }
});

module.exports = School = mongoose.model("school", SchoolSchema);
