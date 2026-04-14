import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../../firebase.init';
import { Link } from 'react-router';

const Login = () => {
   const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const emailRef = useRef();
 
  const handleLogin = e =>{
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);

      // reset
      setSuccess(false);
     setErrorMessage('');

     // login user
     signInWithEmailAndPassword(auth, email,password)
     .then(result =>{
      console.log(result.user);
      if(!result.user.emailVerified){
        alert('Please verify your email address before logging in');
        return;
      }
      setSuccess(true);
     })
      .catch(error =>{
        console.log(error);
        setErrorMessage(error.message)
      })
     }

     const handleForgetPassword = () =>{
      const email = emailRef.current.value;
      console.log('forget password',email);
      sendPasswordResetEmail(auth,email)
      .then(() => {
        alert('Please check your email')
      })
     .catch()      
     }
 
  return (
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
          <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input 
          type="email" 
          name='email'
          ref={emailRef}
          className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div onClick={handleForgetPassword}>
            <a className="link link-hover">Forgot password?</a>
            </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>New to this website? Please <Link className='text-blue-500 underline' to="/signup">Sign up</Link></p>
        {
          errorMessage && <p className='text-red-500'>{errorMessage}</p>
        }
        {
          success && <p className='text-green-500'>User logged in successfully!</p>
        }
      </div>
    </div>
 
    );
};

export default Login;