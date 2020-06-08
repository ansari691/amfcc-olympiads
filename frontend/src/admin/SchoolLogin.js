import React, { useState } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { schoolLogin } from '../actions/auth';
import { MdTrendingFlat } from 'react-icons/md';
import { Redirect } from 'react-router-dom';

const Login = ( {schoolLogin, isAuthenticated}) => {  


  const [ loginFormData, setLoginFormData ] = useState({
    username : '',
    password : ''
  });
  
  const { username, password } = loginFormData;
  
  const onChange = e => 
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  
  const onSubmit = async e =>{
    e.preventDefault();

    schoolLogin(username, password);
    
    //window.alert("logged in successfully");
  }

  if(isAuthenticated){
    return <Redirect to='/school/dashboard' />
  }
  
  return (
    <div style={{ marginBottom : "100px"}} className="forms m-auto border shadow-lg">
        <h3 className="text-center"> <MdTrendingFlat />Admin Login</h3>
      <form className="px-5 py-3" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            name="username"
            className="form-control"
            placeholder="Enter username"
            onChange={e => onChange(e)}
            value={username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={e => onChange(e)}
            value={password}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

Login.propTypes = {
  schoolLogin : PropTypes.func.isRequired,
  isAuthenticated : PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps, { schoolLogin })(Login);
