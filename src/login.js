import React, { Component } from 'react';
import logo from './logo.svg';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="email">
            <div> email </div>
        </p>
        <p className="password">
            <div> password </div>
        </p>
      </div>
    );
  }
}

export default Login;