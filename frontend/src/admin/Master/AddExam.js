import React from "react";

export const AddExam = () => {
  return (
    <div
      class="modal fade"
      id="addExamModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Add Exam
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label class="col-form-label">Exam name:</label>
                <input type="text" class="form-control" id="exam-name" />
                <label class="col-form-label">Exam duration:</label>
                <input type="text" class="form-control" id="exam-duration" />
                <label class="col-form-label">Number of Questions:</label>
                <input type="text" class="form-control" id="no-of-questions" />
                <label class="col-form-label">Passing Criteria :</label>
                <input
                  type="text"
                  class="form-control"
                  id="passing-criteria"
                />
                <label class="col-form-label">Class :</label>
                <input type="text" class="form-control" id="class" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Add new exam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
