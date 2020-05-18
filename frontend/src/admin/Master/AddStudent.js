import React from "react";

export const AddStudent = () => {
  return (
    <div
      class="modal fade"
      id="addStudentModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Register a student
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
                <label class="col-form-label">School Name:</label>
                <input type="text" class="form-control" id="school-name" />
                <label class="col-form-label">Student Name:</label>
                <input type="text" class="form-control" id="student-name" />
                <label class="col-form-label">Standard:</label>
                <input type="text" class="form-control" id="std" />
                <label class="col-form-label">Division :</label>
                <input type="text" class="form-control" id="div" />
                <label class="col-form-label">Roll number :</label>
                <input type="text" class="form-control" id="rollno" />
                <label class="col-form-label">Date Of Birth :</label>
                <input type="text" class="form-control" id="dob" />
                <label class="col-form-label">Student Phone number :</label>
                <input type="text" class="form-control" id="s-phone-no" />
                <label class="col-form-label">Teacher Phone number :</label>
                <input type="text" class="form-control" id="t-phone-no" />
                <label class="col-form-label">Fees :</label>
                <input type="text" class="form-control" id="fees" />
                <label class="col-form-label">Fees Reciept No :</label>
                <input type="text" class="form-control" id="fee-reciept-no" />
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
              Register Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
