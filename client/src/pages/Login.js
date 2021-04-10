import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  
    return (
      <>
      <div className="main-container">
        <div className="results-container add-margin">
            <form className="form-signin add-margin">
                <h1 className="mb-3">Sign in</h1>
                <label htmlFor="inputEmail" className="label-text">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""></input>
                <label htmlFor="inputPassword" className="label-text">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""></input>
                <button className="btn btn-lg btn-block orange-button add-top-margin" type="submit">Sign in</button>           
            </form>
            <p className="center">Don't have an account with us yet?:<Link to="/signup" className="add-padding link-text bold-text">Create an Account</Link></p>
        </div>
      </div>
    </>
    );
  };
  
  export default Login;