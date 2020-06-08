import React, { useState } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { registerStudent } from '../actions/auth';


const RegisterStudent = ( {registerStudent} ) => {
  
  const [registerStudentForm, setRegisterStudentForm] = useState({
    schoolName: "",
    studentName: "",
    dob: "",
    standard: "",
    div: "",
    rollNo: "",
    studentPhone: "",
    teacherPhone: "",
    feesAmount: "",
    feesReceiptNo: "",
  });

  const {
    schoolName,
    studentName,
    dob,
    standard,
    div,
    rollNo,
    studentPhone,
    teacherPhone,
    feesAmount,
    feesReceiptNo
  } = registerStudentForm;

  const onChange = (e) =>
    setRegisterStudentForm({
      ...registerStudentForm,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();

    registerStudent({...registerStudentForm});
  };

  return (
    <div style={{ marginBottom : "100px"}} className="forms m-auto border shadow-lg">
      <Link to="/school/students">
      <button className="btn btn-primary d-block ml-auto mt-2 mr-2">Manage Students</button>
      </Link>
      
      <form onSubmit={(e) => onSubmit(e)} className="px-5 py-3">
        <div className="form-group">
          <label className="col-form-label">School Name:</label>
          <input
            type="text"
            className="form-control"
            name="schoolName"
            onChange={(e) => onChange(e)}
            value={schoolName}
          />
          <label className="col-form-label">Student Name:</label>
          <input
            type="text"
            className="form-control"
            name="studentName"
            onChange={(e) => onChange(e)}
            value={studentName}
          />
          <label className="col-form-label">Standard:</label>
          <input
            type="text"
            className="form-control"
            name="standard"
            onChange={(e) => onChange(e)}
            value={standard}
          />
          <label className="col-form-label">Division :</label>
          <input
            type="text"
            className="form-control"
            name="div"
            onChange={(e) => onChange(e)}
            value={div}
          />
          <label className="col-form-label">Roll number :</label>
          <input
            type="text"
            className="form-control"
            name="rollNo"
            onChange={(e) => onChange(e)}
            value={rollNo}
          />
          <label className="col-form-label">Date Of Birth :</label>
          <input
            type="text"
            className="form-control"
            name="dob"
            onChange={(e) => onChange(e)}
            value={dob}
          />
          <label className="col-form-label">Student Phone number :</label>
          <input
            type="text"
            className="form-control"
            name="studentPhone"
            onChange={(e) => onChange(e)}
            value={studentPhone}
          />
          <label className="col-form-label">Teacher Phone number :</label>
          <input
            type="text"
            className="form-control"
            name="teacherPhone"
            onChange={(e) => onChange(e)}
            value={teacherPhone}
          />
          <label className="col-form-label">Fees :</label>
          <input
            type="text"
            className="form-control"
            name="feesAmount"
            onChange={(e) => onChange(e)}
            value={feesAmount}
          />
          <label className="col-form-label">Fees Receipt No :</label>
          <input
            type="text"
            className="form-control"
            name="feesReceiptNo"
            onChange={(e) => onChange(e)}
            value={feesReceiptNo}
          />
        </div>
        <button type="submit" className="btn btn-success">Register Student</button>
      </form>
    </div>
  );
};

RegisterStudent.propTypes = {
  registerStudent : PropTypes.func.isRequired,
  isAuthenticated : PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps, {registerStudent})(RegisterStudent);
