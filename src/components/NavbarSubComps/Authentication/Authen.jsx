import React from 'react';
import './AuthenStyle.css'

const Authen = () => {
  return (
   <>
   <div className="Authen-main-div">
        <div className='Authen-bg-overlay'></div>
        <div className="form-box Auth-form-box">
          <h1 id="title-field">Sign Up</h1>
          <form className='auth-form'>
            <div className="Auth-input-group">
              {/* {logIn ? '' :  */}
              <div className="form-inputs auth-form-inputs" id="name-input-field">
                <i className="fa-solid fa-user"></i>
                <input className='Auth-input' 
                // value={newname} onChange={(e)=>SetNewname(e.target.value)}
                 type="text" placeholder="User Name" id="enter-user" />
              </div>
              {/* } */}
              <div className="form-inputs auth-form-inputs">
                <i className="fa-solid fa-envelope"></i>
                <input className='Auth-input' 
                // value={email} onChange={(e)=>SetEmail(e.target.value)}
                 type="email" placeholder="Email" id="enter-email" />
              </div>
              <div className="form-inputs auth-form-inputs">
                <i className="fa-solid fa-lock"></i>
                <input
                className='Auth-input'
                // value={password} onChange={(e)=>SetPassword(e.target.value)}
                  // type={showpswd ? "text" : "password"}
                  placeholder="Password"
                  id="enter-password"
                />
                <i
                  // className={showpswd ? "fa-solid fa-eye-slash" : 
                  className="fa-solid fa-eye"
                // }
                  // onClick={togglePassword}
                  id="Auth-span"
                ></i>
              </div>
              <p>Forgot Password ? <a href="/">Click here</a></p>
            </div>
            <div className="btn-field">
              <button 
              // className={logIn?'Auth-button-disabled':'Auth-button-enabled'}
               type="button" 
              //  onClick={SignUpHere} 
               id="Sign-up-btn">
                Sign Up
              </button>
              
              <button 
              // className={logIn?'Auth-button-enabled':'Auth-button-disabled'} 
              // onClick={LogInHere} 
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