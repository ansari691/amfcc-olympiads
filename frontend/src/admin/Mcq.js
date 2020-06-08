import React from "react";

const Mcq = ({ question, a, b, c, d, answer }) => {
  return (
      <div className="border mb-5">
      <h6 className="d-inline">{question}</h6>
      <p>A : {a}</p>
      <p>B : {b}</p>
      <p>C : {c}</p>
      <p>D : {d}</p>
      <p>correct answer : {answer}</p>
      </div>
  );
};

export default Mcq;
