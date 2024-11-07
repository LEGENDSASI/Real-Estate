 import React, { useEffect } from 'react';
import './Login.css'; // Custom styles
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useNotification from '../Notification/Notification';

const Login = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        navigate('/'); // Redirect to home page if accessToken is found
    }
}, [navigate]);

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

  function GoToHomePage (event) {
    event.preventDefault();
    const Username = document.getElementById('Login_Username').value;
    const Password = document.getElementById('Login_Password').value;

    if(Username === '' || Password === ''){
      return showNotification('All Fields are Required', 'error');
    }

    const data = {
      username: Username,
      password: Password
    }

    axios.post('http://localhost:8080/api/auth/login', data)
    .then((res) => {
      console.log('Success Login:',res.data);
      localStorage.setItem("accessToken",res.data);  
      navigate('/')    
    }).catch((err) => {
      if(err.status === 400){
        return showNotification(err.response.data, 'error');
      }
      console.log('Failed Login:',err);
      
    })
  }



  function GoToLoginPage (event) {
    event.preventDefault();
    const Username = document.getElementById('Register_Username').value;
    const Email = document.getElementById('Register_Email').value;
    const Password = document.getElementById('Register_Password').value;
    const ConfirmPassword = document.getElementById('Register_Confirm_Password').value;

    if(Username === '' || Email === '' || Password === '' || ConfirmPassword === ''){
      return showNotification('All Fields are Required', 'error');
    }
    const EmailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(!EmailPattern.test(Email)) return showNotification('Invalid Email', 'error');

    if(Password!==ConfirmPassword) return showNotification('Password not Matched', 'error');  
       
    
    const data = {
      username: Username,
      email: Email,
      password: Password,
    }
    



    axios.post('http://localhost:8080/api/auth/register',data)
    .then((res)=>{
      console.log('Success Register:',res.data)
      toggle()
      showNotification('User Created Successfully', 'success');
    }).catch((err)=>{
      if(err.status === 400){
        return showNotification(err.response.data, 'error');
      }
      console.log('Failed Register:',err);
      
    })
  }

  // const [emailValue,SetEmailValue] = useState('')

  // const emailValidation = (event) => {
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //     SetEmailValue(emailValue.replace(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, ''))
    
  // }

  const { NotificationComponent, showNotification } = useNotification();

  // const triggerNotification = () => {
  //   showNotification('This is a success message!', 'success');
  // };

  return (
    <>
     <div className='notify_login'>
      {NotificationComponent}
    </div>
    <div className="Login">
    <div id="container" className="container_main">
      {/* FORM SECTION */}
      <div className="row">
        {/* SIGN UP */}
        
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
          <form onSubmit={GoToLoginPage} id='Register_Form_Tag'>
            <div className="form sign-up">
              <div className="input-group">
                <i className="fa-solid fa-user"></i>
                <input type="text" id='Register_Username' placeholder="Username" />
              </div>

              <div className="input-group">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" id='Register_Email' placeholder="Email" />
              </div>
              <div className="input-group">
                <i className="fa-solid fa-unlock"></i>
                <input type="password" id='Register_Password' placeholder="Password" />
              </div>
              <div className="input-group">
                <i className="fa-solid fa-lock"></i>
                <input type="password" id='Register_Confirm_Password' placeholder="Confirm password" />
              </div>
              <button type='submit'>Sign up</button>
              <p>
                <span>Already have an account?</span>
                <b onClick={toggle} className="pointer">
                  Sign in here
                </b>
              </p>
            </div>
            </form>
          </div>
        </div>
        
        {/* END SIGN UP */}
        {/* SIGN IN */}
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
          <form onSubmit={GoToHomePage} id='Login_Form_Tag'>
            <div className="form sign-in">
              <div className="input-group">
                <i className="fa-solid fa-user-secret"></i>
                <input type="text" id='Login_Username' placeholder="Username" />
              </div>
              <div className="input-group">
                <i className="fa-solid fa-key"></i>
                <input type="password" id='Login_Password' placeholder="Password"/>
              </div>
              <button type='submit'>Sign in</button>
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
            </form>
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
    </>
  );
};

export default Login;