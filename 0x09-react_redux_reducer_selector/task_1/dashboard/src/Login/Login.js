/* LOGIN COMPONENT PROP */
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      enableSubmit: false,
      email: '',
      password: '',
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.checkInputStatus = this.checkInputStatus.bind(this);
  }

  //handles when login form submit button is pressed
  handleLoginSubmit(event) {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }

  //checks if input.target.value is empty and sets enable submit accordingly
  checkInputStatus(event, PassOrEmail) {
    if (event.target.value === '' || this.state[PassOrEmail] === '') {
      return (false);
    }
    return (true);
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
      enableSubmit: this.checkInputStatus(event, 'password'),
    })
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value,
      enableSubmit: this.checkInputStatus(event, 'email'),
    })
  }

  render () {
    return (
      <form className={'login-form ' + css(styles.loginForm)} onSubmit={this.handleLoginSubmit}>
        <label className={css(styles.labelEmail)} htmlFor='email' id='email-label'>Email:</label>
        <input type='email' name='email' id='email' onChange={this.handleChangeEmail} value={this.state.email}></input>
        <label className={css(styles.loginLabel, styles.loginPassword)} htmlFor='password' id='password-label'>Password:</label>
        <input type='text' name='password' id='password' onChange={this.handleChangePassword} value={this.state.password}></input>
        <input type='submit' value='OK' id="form-submit" className={css(styles.loginBtn)} disabled={!this.state.enableSubmit}></input>
      </form>
    );
  }
}

const styles = StyleSheet.create({
  loginForm: {
    height: "70%",
    padding: "1rem",
    fontSize: "1.2rem",
    fontWeight: "500",
    '@media (max-width: 630px)': {
      display: "flex",
      flexDirection: "column",
      width: '300px'
		},
  },
  loginPassword: {
    marginLeft: '10px',
    marginRight: '10px'
  },

  margin: {
  },
  labelEmail: {
    marginRight: '10px'
  },
  loginBtn: {
    '@media (max-width: 630px)': {
      width: '30px',
		},
  }
});

export default Login;