/* LOGIN COMPONENT PROP */
import React from 'react';
import './Login.css'

export default function Login() {
  return (
    <form className='login-form'>
      <label htmlFor='email' id='email-label'>Email:</label>
      <input type='email' name='email' id='email'></input>
      <label htmlFor='password' id='password-label'>Password:</label>
      <input type='text' name='password' id='password'></input>
      <button>OK</button>
    </form>
  );
}
