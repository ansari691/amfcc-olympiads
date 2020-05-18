import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./admin/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Dashboard } from "./admin/Dashboard";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/school/login" component={Login} />
        <Route exact path="/school/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
