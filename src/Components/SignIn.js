import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login, logout } from '../helper';

const SignIn = () => {
    const navigate=useNavigate();
    const [userDetails,setUserDetails] =useState({
        email:'',
        password:''
    })
    const {email,password} = userDetails;
    const handleInput = (e) =>{
        setUserDetails({...userDetails, [e.target.name]:e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(parseInt(password)===12345){
            login(parseInt(password));
            navigate('/dashboard');
        }
    }
   
  return (
    <div>SignIn
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="text" name="email" value={email} onChange={handleInput}/>
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={handleInput}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default SignIn