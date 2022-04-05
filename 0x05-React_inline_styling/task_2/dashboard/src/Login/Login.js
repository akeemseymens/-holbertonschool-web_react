/* LOGIN COMPONENT PROP */
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <form className={'login-form ' + css(styles.loginForm)}>
      <label className={css(styles.labelEmail)} htmlFor='email' id='email-label'>Email:</label>
      <input type='email' name='email' id='email'></input>
      <label className={css(styles.loginLabel) + ' ' + css(styles.loginPassword)} htmlFor='password' id='password-label'>Password:</label>
      <input type='text' name='password' id='password'></input>
      <button>OK</button>
    </form>
  );
}

const styles = StyleSheet.create({
  loginForm: {
    height: "70%",
    padding: "1rem",
    fontSize: "1.2rem",
    fontWeight: "500",
  },
  loginPassword: {
    marginLeft: '10px',
    marginRight: '10px'
  },
  margin: {
  },
  labelEmail: {
    marginRight: '10px'
  }
});

export default Login;