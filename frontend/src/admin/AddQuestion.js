import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setAlert } from "../actions/alert";
import { addQuestion } from "../actions/question";

const AddQuestion = ({ examId, set, addQuestion}) => {
  const [addQuestionForm, setAddQuestionForm] = useState({
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    answer: "",
  });

  const { question, a, b, c, d, answer } = addQuestionForm;


  
  const onChange = (e) =>
    setAddQuestionForm({
      ...addQuestionForm,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();

    addQuestion(examId, set, addQuestionForm);
  };

  return (
    <div
      className="modal fade"
      id="addQuestionModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Question
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
                <label className="col-form-label">Question :</label>
                <input
                  type="text"
                  className="form-control"
                  name="question"
                  onChange={(e) => onChange(e)}
                  value={question}
                />
                <label className="col-form-label">A :</label>
                <input
                  type="text"
                  className="form-control"
                  name="a"
                  onChange={(e) => onChange(e)}
                  value={a}
                />
                <label className="col-form-label">B :</label>
                <input
                  type="text"
                  className="form-control"
                  name="b"
                  onChange={(e) => onChange(e)}
                  value={b}
                />
                <label className="col-form-label">C :</label>
                <input
                  type="text"
                  className="form-control"
                  name="c"
                  onChange={(e) => onChange(e)}
                  value={c}
                />
                <label className="col-form-label">D :</label>
                <input
                  type="text"
                  className="form-control"
                  name="d"
                  onChange={(e) => onChange(e)}
                  value={d}
                />
                <label className="col-form-label">
                  Correct Option : <br />
                </label>

                {/* <label for="cars">Choose a car:</label> */}

                <select
                  name="answer"
                  id="answer"
                  onChange={(e) => onChange(e)}
                  value={answer}
                >
                  <option value="a">a</option>
                  <option value="b">b</option>
                  <option value="c">c</option>
                  <option value="d">d</option>
                </select>
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
              <button type="sumbmit" className="btn btn-primary">
                Add question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

AddQuestion.propTypes = {
  addQuestion : PropTypes.func.isRequired,
  isAuthenticated : PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps, {addQuestion})(AddQuestion);

