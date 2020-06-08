import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";
import AddQuestion from "./AddQuestion";

const ExamList = () => {
  const [examList, setExamList] = useState([]);
  useEffect(() => {
    async function getExamList() {
      const res = await axios.get(process.env.REACT_APP_API_BASE_URL + "exams");
      setExamList(res.data);
    }
    getExamList();
  }, []);

  return (
    <div className="container">
      <div className="row">
          {examList.map((el) => {
            return (
                <Link to={`/questions/sets/${el.examId}`} className="col-2 border mr-4 text-decoration-none" >
                    {el.examName}
                </Link>
            )
          })}
      </div>
    </div>
  );
};

export default ExamList;
