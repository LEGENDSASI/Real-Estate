 import React, { useState,  useEffect } from 'react';
import './Login.css'; // Custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
// import User from '../../../../Backend/Model/UserModel';

const Login = () => {
  const toggle = () => {
    const container = document.getElementById('container');
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
  };

  useEffect(() => {
    const container = document.getElementById('container');
    setTimeout(() => {
      container.classList.add('sign-in');
    }, 200);
  }, []);

  const [emailValue,SetEmailValue] = useState('')

  const emailValidation = (event) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      SetEmailValue(emailValue.replace(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, ''))
    
  }

  return (
    <div className="Login">
    <div id="container" className="container_main">
      {/* FORM SECTION */}
      <div className="row">
        {/* SIGN UP */}
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <div className="form sign-up">
              <div className="input-group">
                <i className="fa-solid fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>

              <div className="input-group">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" value={emailValue} onChange={emailValidation} placeholder="Email" />
              </div>
              <div className="input-group">
                <i className="fa-solid fa-unlock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-group">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Confirm password" />
              </div>
              <button>Sign up</button>
              <p>
                <span>Already have an account?</span>
                <b onClick={toggle} className="pointer">
                  Sign in here
                </b>
              </p>
            </div>
          </div>
        </div>
        {/* END SIGN UP */}
        {/* SIGN IN */}
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <div className="input-group">
                <i className="fa-solid fa-user-secret"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-group">
                <i className="fa-solid fa-key"></i>
                <input type="password" placeholder="Password" />
              </div>
              <button>Sign in</button>
              <p>
                <b>Forgot password?</b>
              </p>
              <p>
                <span>Don't have an account?</span>
                <b onClick={toggle} className="pointer">
                  Sign up here
                </b>
              </p>
            </div>
          </div>
        </div>
        {/* END SIGN IN */}
      </div>
      {/* END FORM SECTION */}
      {/* CONTENT SECTION */}
      <div className="row content-row">
        {/* SIGN IN CONTENT */}
        <div className="col align-items-center flex-col">
          <div className="text sign-in">
            <h2>Welcome</h2>
          </div>
          <div className="img sign-in"></div>
        </div>
        {/* END SIGN IN CONTENT */}
        {/* SIGN UP CONTENT */}
        <div className="col align-items-center flex-col">
          <div className="img sign-up"></div>
          <div className="text sign-up">
            <h2>Join with us</h2>
          </div>
        </div>
        {/* END SIGN UP CONTENT */}
      </div>
      {/* END CONTENT SECTION */}
    </div>
    </div>
  );
};

export default Login;