import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';

const SignUp = () => {
   const [success,  setSucess] = useState(false);
    const [errorMessage, setErrorMessage] =  useState('');

    const handleSignUp = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
   
      setSucess(false);  
     setErrorMessage('');

    //  password validation
    const passwordRedEx =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  
    if(passwordRedEx.test(password) === false){
        setErrorMessage('Password must be at Least 6 characters Long and contain at Least one uppercase Letter, one Lowercase Letter and one number');
        return;
    }
        // create user
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
        console.log(result);
        setSucess(true);
    })
    .catch(error =>{
        console.log(error);
        setErrorMessage(error.message);
    })
    }
  
    return (
       <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className='text-3xl font-bold'>Please Sign Up now!</h1>
        <form onSubmit={handleSignUp}>
          <label className="label">Email</label>
          <input type="email" name= 'email' className="input" placeholder="Email" />
          <label className="label mt-4">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
       {
    errorMessage && <p className='text-red-500'>{errorMessage}</p>
    }
    {
        success && <p className='text-green-500'>User has created successfully!</p>
    }
      </div>
    </div>
    );
};

export default SignUp;