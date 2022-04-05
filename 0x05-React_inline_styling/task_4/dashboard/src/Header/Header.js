import React from 'react';
import holbertonLogo from '../assets/holberton-logo.jpg';
import { StyleSheet, css} from 'aphrodite'

export default function Header(props) {
  return (
    <div className={'App-header ' + props.className}>
        <img src={holbertonLogo} alt="logo" className={'AppLogo ' + css(styles.AppLogo)}/>
        <h1>School dashboard</h1>
    </div>
  )
}

const styles = StyleSheet.create({
    AppLogo: {
        width: '200px',
        height: '200px'
    }
})
