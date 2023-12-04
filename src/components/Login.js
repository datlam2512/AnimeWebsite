import React, { useEffect,useState } from 'react'
import { UserAuth } from '../Context/AuthContext';
import {message} from 'antd'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import Home from './Home'
import './Login.css'
export default function Login() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/');
      message.success(`Login successful`);
    }
  }, [user]);
  return (
    <div className='login-account'>
    <h1 className='text-center text-3xl font-bold py-8 login-tittle'>Sign in</h1>
    <div className='max-w-[240px] m-auto py-4'>
      <button className='button-google'  onClick={handleGoogleSignIn} > <FontAwesomeIcon icon={faGoogle} />  LOGIN</button>
    </div>
  </div>
    
  )
}
