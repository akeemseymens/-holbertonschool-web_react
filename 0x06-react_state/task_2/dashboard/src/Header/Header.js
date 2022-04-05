import React from 'react';
import holbertonLogo from '../assets/holberton-logo.jpg';
import { StyleSheet, css} from 'aphrodite'
import { AppContext } from '../App/AppContext';

export default class Header extends React.Component{
  constructor(props) {
    super(props);
  }

  render () {
    let user = this.context.user;
    let logOut = this.context.logOut;

    return (
      <>
        <div className={'App-header ' + this.props.className}>
            <img src={holbertonLogo} alt="logo" className={'AppLogo ' + css(styles.AppLogo)}/>
            <h1>School dashboard</h1>
        </div>
        {
          user.isLoggedIn ? //IF
              <p id='logoutSection'>Welcome {user.email} <span onClick={logOut}>(logout)</span></p>
            : //ELSE
              <p>Not signed in</p>
        }
      </>
    );
  }
}

Header.contextType = AppContext;

const styles = StyleSheet.create({
    AppLogo: {
        width: '200px',
        height: '200px'
    }
})
