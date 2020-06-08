import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import SchoolLogin from "./admin/SchoolLogin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Dashboard } from "./admin/Dashboard";
import { ManageStudents } from "./admin/ManageStudents";
import RegisterStudent from "./admin/RegisterStudent";
import store from "./store";
import Alert from "./Alert";
import AddQuestion from "./admin/AddQuestion";
import ExamList from "./admin/ExamList";
import QuestionList from "./admin/QuestionList";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="content">
        <Header />
        <Alert />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/school/login" component={SchoolLogin} />
          <Route exact path="/school/dashboard" component={Dashboard} />
          <Route exact path="/school/students" component={ManageStudents} />
          <Route
            exact
            path="/school/students/register"
            component={RegisterStudent}
          />
          <Route exact path='/questions/sets/:examId' component={QuestionList} />
          <Route exact path="/exams" component={ExamList} />
        </Switch>
        </div>
        
        <div className="footer">
        <Footer />
        </div>
        
      </Router>
    </Provider>
  );
}

export default App;
