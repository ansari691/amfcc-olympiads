import React, { useEffect, useState } from "react";
import axios from "axios";
import AddQuestion from "./AddQuestion";
import Mcq from "./Mcq";

const QuestionList = ({ match }) => {
  const [sets, setSets] = useState([]);
  const [selectedSet, setSelectedSet] = useState("not selected");

  const { examId } = match.params;

  const set = sets
    .filter((set) => set.set == selectedSet)
    .map((set) => set.mcqs);

  useEffect(() => {
    async function getSets(examId) {
      const res = await axios.get(
        process.env.REACT_APP_API_BASE_URL + `questions/${examId}`
      );
      setSets(res.data);
    }
    getSets(examId);
  }, []);

  const onClick = (e) => {
    setSelectedSet(e.target.value);
  };

  const setButtons = (
    <div className="row justify-content-center">
      {sets.map((s) => {
        return (
          <button
            className="btn btn-primary col-2 mr-2"
            onClick={(e) => onClick(e)}
            value={s.set}
            key={s._id}
          >
            {s.set}
          </button>
        );
      })}
    </div>
  );

  let mcqs = null;
  if (set[0]) {
    mcqs = set[0].map((mcq) => {
      return (
        <li key={mcq._id}>
          <Mcq {...mcq} />
        </li>
      );
    });
  }

  return (
    <div className="container">
      <h6>SELECTED EXAM : {examId}</h6>
      <h6>SELECTED SET : {selectedSet}</h6>

      {setButtons.props.children.length > 0 ? (
        setButtons
      ) : (
        <>
          <h6 className="text-center">questions set empty</h6>
          Add a new set : 
          <input
            type="text"
            name="selectedSet"
            onChange={(e) => setSelectedSet(e.target.value)}
            className="d-inline"
          />

        </>
      )}

      {selectedSet != "not selected" ? <button
        className="btn btn-primary d-block ml-auto"
        data-toggle="modal"
        data-target="#addQuestionModal"
      >
        Add question
      </button> : null}

      <div className="container">
        <ol>{mcqs}</ol>
      </div>
      <AddQuestion examId={examId} set={selectedSet} />
    </div>
  );
};

export default QuestionList;
