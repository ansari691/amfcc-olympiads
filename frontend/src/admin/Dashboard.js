import React from "react";
import { Link } from 'react-router-dom';

import "./Dashboard.css";
import { AddClass } from "./Master/AddClass";
import { AddDivision } from "./Master/AddDivision";
import { AddNotice } from "./AddNotice";
import AddExam from "./AddExam";
import { AddStudent } from "./AddStudent";

export const Dashboard = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>

      <div className="dashboard row justify-content-between">
        <p className="col-3" data-toggle="modal" data-target="#addExamModal">
          Add exams
        </p>
        <Link to="/school/students/register" className="col-3"> 
          <p >Register students</p>
        </Link>

        <Link to="/school/students" className="col-3"> 
          <p >Manage students</p>
        </Link>

        <p className="col-3" data-toggle="modal" data-target="#addClassModal">
          Add class
        </p>
        <p
          className="col-3"
          data-toggle="modal"
          data-target="#addDivisionModal"
        >
          Add division
        </p>
        <p className="col-3" data-toggle="modal" data-target="#addNoticeModal">
          Add notice
        </p>
      </div>

      <AddClass />
      <AddDivision />
      <AddNotice />
      <AddExam />
      <AddStudent />
    </div>
  );
};
