import React, { Component } from 'react';

class Register extends Component {

  register() {
    const username=document.getElementById("username").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    this.props.setPage("login");
  }

  render() {
    return (
      <div className="App">
        <h1>Register</h1>
        <form>
          UserName: <input id="username" name="username"/><br/>
          Email: <input id="email" name="email"/><br/>
          Password: <input id="password" name="password"/><br/>
          <button onClick={() => this.register()}>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
