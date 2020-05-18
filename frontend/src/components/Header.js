import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
import {
  MdAccountBox,
  MdTrendingFlat,
  MdExitToApp,
  MdAssignment
} from "react-icons/md";

import { GoHome, GoPencil } from "react-icons/go";


// import { logout } from "../actions/auth";
import "./Header.css";

const Header = () => {
  const guestLink = (
    <Fragment>
      <Link className="mr-2" to="/register">
        <button className="btn btn-success rounded-pill">
          <MdAccountBox />
          Register
        </button>
      </Link>
      <Link to="/login">
        <button className="btn btn-success rounded-pill">
          <MdTrendingFlat />
          Login
        </button>
      </Link>
    </Fragment>
  );

  const authLink = (
    <Fragment>
      <Link to="/postList">
        <GoHome /> <span id="hide">Home</span>
      </Link>
      <Link to="/profile">
        <GoPencil /> <span id="hide">Exams</span>
      </Link>
      <Link to="/postAd">
        <MdAssignment /> <span id="hide">Results</span>
      </Link>
      <Link to="/">
        <MdExitToApp /> <span id="hide">Logout</span>
      </Link>
    </Fragment>
  );

  return (
    <nav className="d-flex justify-content-between mb-5">
      <div className="header">{authLink}</div>
    </nav>
  );
};

// Header.propTypes = {
//   auth: PropTypes.object.isRequired,
//   logout: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

export default Header;//connect(mapStateToProps, { logout })(Header);
