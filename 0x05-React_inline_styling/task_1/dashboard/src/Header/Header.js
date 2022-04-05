/* HEADER COMPONENT PROP */
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid rgb(207, 8, 8)',
  },
  header: {
    color: 'rgb(207, 8, 8)',
    fontWeight: '660',
  },
  AppLogo: {
    width: '200px',
  }
});

export default function Header() {
  return (
    <div className={'App-header ' + css(styles.AppHeader)}>
      <img src={holbertonLogo} className={'AppLogo ' + css(styles.AppLogo)} alt='logo' />
      <h1 className={css(styles.header)}>School dashboard</h1>
    </div>
  );
}
