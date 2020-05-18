import React from "react";
import './Dashboard.css';
import { AddClass } from "./Master/AddClass";
import { AddDivision } from './Master/AddDivision';
import { AddNotice } from './Master/AddNotice';
import { AddExam } from './Master/AddExam';
import { AddStudent } from './Master/AddStudent';

export const Dashboard = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>

      <div className="dashboard row justify-content-between">
        <p className="col-3" data-toggle="modal" data-target="#addExamModal">Add exams</p>
        <p className="col-3" data-toggle="modal" data-target="#addStudentModal">Register students</p>
        <p className="col-3">Manage Students</p>
        <p className="col-3" data-toggle="modal" data-target="#addClassModal">Add class</p>
        <p className="col-3" data-toggle="modal" data-target="#addDivisionModal">Add division</p>
        <p className="col-3" data-toggle="modal" data-target="#addNoticeModal">Add notice</p>
      </div>

    <AddClass />
    <AddDivision />
    <AddNotice />
    <AddExam />
    <AddStudent />

    </div>
  );
};
