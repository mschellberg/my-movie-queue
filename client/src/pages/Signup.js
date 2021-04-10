import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  
    return (
        <>
        <div className="main-container">
            <div className="results-container add-margin">
                <form className="form-signin add-margin">
                    <h1 className="mb-3">Create an Account</h1>
                    <label htmlFor="inputEmail" className="label-text">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""></input>
                    <label htmlFor="inputUsername" className="label-text">Username</label>
                    <input type="username" id="inputUsername" className="form-control" placeholder="Username" required="" autoFocus=""></input>
                    <label htmlFor="inputPassword" className="label-text">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""></input>
                    <button className="btn btn-lg btn-block orange-button add-top-margin" type="submit">Sign up</button>           
                </form>
                <p className="center">Already have an account with us?:<Link to="/login" className="add-padding link-text bold-text">Login to your account</Link></p>
            </div>
        </div>
    </>
    );
};
  
export default Signup;



