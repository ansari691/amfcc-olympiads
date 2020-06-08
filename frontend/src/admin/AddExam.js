import React, { useState } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addExam } from "../actions/exam";

const AddExam = ( {addExam} ) => {
  const [addExamFormData, setAddExamFormData] = useState({
    examName: "",
    examDuration: "",
    numberOfQuestions: "",
    passingCriteria: "",
    standard: "",
  });
  const {
    examName,
    examDuration,
    numberOfQuestions,
    passingCriteria,
    standard,
  } = addExamFormData;
  const onChange = (e) =>
    setAddExamFormData({ ...addExamFormData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    addExam({...addExamFormData});
  };

  return (
    <div
      className="modal fade"
      id="addExamModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Exam
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="modal-body">
              <div className="form-group">
                <label className="col-form-label">Exam name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="examName"
                  onChange={(e) => onChange(e)}
                  value={examName}
                />
                <label className="col-form-label">Exam duration:</label>
                <input
                  type="text"
                  className="form-control"
                  name="examDuration"
                  onChange={(e) => onChange(e)}
                  value={examDuration}
                />
                <label className="col-form-label">Number of Questions:</label>
                <input
                  type="text"
                  className="form-control"
                  name="numberOfQuestions"
                  onChange={(e) => onChange(e)}
                  value={numberOfQuestions}
                />
                <label className="col-form-label">Passing Criteria :</label>
                <input
                  type="text"
                  className="form-control"
                  name="passingCriteria"
                  onChange={(e) => onChange(e)}
                  value={passingCriteria}
                />
                <label className="col-form-label">Class :</label>
                <input
                  type="text"
                  className="form-control"
                  name="standard"
                  onChange={(e) => onChange(e)}
                  value={standard}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Add new exam
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


AddExam.propTypes = {
  addExam : PropTypes.func.isRequired,
  isAuthenticated : PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps, { addExam })(AddExam);
