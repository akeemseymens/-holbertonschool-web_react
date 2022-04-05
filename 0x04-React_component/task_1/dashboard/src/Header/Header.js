/* HEADER COMPONENT PROP */
import React from 'react';
import holbertonLogo from '../assets/holberton-logo.jpg';
import './Header.css'

export default function Header() {
  return (
    <div className='App-header'>
      <img src={holbertonLogo} className='holberton-logo' alt='logo' />
      <h1>School dashboard</h1>
    </div>
  );
}
