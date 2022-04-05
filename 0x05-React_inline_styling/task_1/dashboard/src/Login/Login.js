/* LOGIN COMPONENT PROP */
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loginForm: {
    margin: '0px 40px'
  },
  loginPassword: {
    marginLeft: '10px'
  },
  margin: {
  },
  label: {
    marginRight: '10px'
  }
});

export default function Login() {
  return (
    <form className={'login-form ' + css(styles.loginForm)}>
      <label className={css(styles.label)} htmlFor='email' id='email-label'>Email:</label>
      <input type='email' name='email' id='email'></input>
      <label className={css(styles.loginLabel) + ' ' + css(styles.loginPassword)} htmlFor='password' id='password-label'>Password:</label>
      <input type='text' name='password' id='password'></input>
      <button>OK</button>
    </form>
  );
}
