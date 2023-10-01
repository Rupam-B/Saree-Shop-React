import React, { useEffect, useState } from 'react';
import './AuthenStyle.css'
import { AuthenticationLogin,AuthenticationSignUP,AuthenticationLogOut } from '../../../Redux/action';
import { useDispatch, useSelector } from 'react-redux';

const Authen = () => {
  
  const testdata = useSelector((state)=>state.AuthenticationReducer)
  const AuthDispatch = useDispatch();
  

  const [logIn, SetLogIn] = useState(false)
  const [showpswd, SetShowpswd] = useState(false)
  const [newname, SetNewname] = useState("")
  const [email, SetEmail] = useState("")
  const [password, SetPassword] = useState("")

  const SignUpHere = () => {
    SetLogIn(false);
    const sendArr = { newname, email, password };

    AuthDispatch(AuthenticationSignUP(sendArr))
    
    if(sendArr.newname&&sendArr.email&&sendArr.password !==''){
  
    SetPassword('')
    SetNewname('')
    SetEmail('')
  
  
  }
    

  };
  
  const LogInHere = () => {
    SetLogIn(true)
    const checkArr = {newname,email, password};
    
    AuthDispatch(AuthenticationLogin(checkArr))
    
      SetEmail('')
      SetPassword('')

  }
  

  const togglePassword = () => {

    SetShowpswd(!showpswd)

  }

  useEffect(()=>{
    localStorage.setItem("localStoredSareeUserDetails",JSON.stringify(testdata.sendArr))
    localStorage.setItem("localStoredSareeUserCheck",JSON.stringify(testdata.checkArr));
  },[testdata.sendArr,testdata.checkArr])


  return (
   <>
   <div className="Authen-main-div">
        <div className='Authen-bg-overlay'></div>
        <div className="form-box Auth-form-box">
   <span onClick={()=>{AuthDispatch(AuthenticationLogOut())}} className={testdata.checkArr.newname?'Log-out-button-visible':'Log-out-button-not'}>Log Out <span className='Log-out-button-logo-visible'><i className="fa-solid fa-power-off"></i></span></span>
          <h1 id="title-field">{logIn? "Log In":" Sign Up"}</h1>
          
          <form className='auth-form'>
            <div className="Auth-input-group">
              {logIn ? '' : 
              <div className="form-inputs auth-form-inputs" id="name-input-field">
                <i className="fa-solid fa-user"></i>
                <input className='Auth-input' 
                value={newname} onChange={(e)=>SetNewname(e.target.value)}
                 type="text" placeholder="User Name" id="enter-user" />
              </div>
               } 
              <div className="form-inputs auth-form-inputs">
                <i className="fa-solid fa-envelope"></i>
                <input className='Auth-input' 
                value={email} onChange={(e)=>SetEmail(e.target.value)}
                 type="email" placeholder="Email" id="enter-email" />
              </div>
              <div className="form-inputs auth-form-inputs">
                <i className="fa-solid fa-lock"></i>
                <input
                className='Auth-input'
                value={password} onChange={(e)=>SetPassword(e.target.value)}
                  type={showpswd ? "text" : "password"}
                  placeholder="Password"
                  id="enter-password"
                />
                <i
                  className={showpswd ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
                  // className="fa-solid fa-eye"
                }
                  onClick={togglePassword}
                  id="Auth-span"
                ></i>
              </div>
              <p>Forgot Password ? <a href="/">Click here</a></p>
            </div>
            <div className="btn-field">
              <button 
              className={logIn?'Auth-button-disabled':'Auth-button-enabled'}
               type="button" 
               onClick={SignUpHere} 

              // onClick={()=>{AuthDispatch(AuthenticationSignUP(1))}}
               id="Sign-up-btn">
                Sign Up
              </button>
              
              <button 
              className={logIn?'Auth-button-enabled':'Auth-button-disabled'} 
              onClick={LogInHere} 

              // onClick={()=>{AuthDispatch(AuthenticationLogin(2))}}
              type="button" id="Sign-in-btn">
                Log in
              </button>
              
            </div>
          </form>
        </div>
      </div>
   </>
  )
}



export default Authen;