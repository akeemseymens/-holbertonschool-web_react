/* FOOTER COMPONENT PROP */
import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils.js';
import { AppContext } from '../App/AppContext';

export default function Footer(props) {
  return (
    <AppContext.Consumer>
      {value => (
        <div className={'App-footer ' + props.className}>
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
          {value.user.isLoggedIn ? <p><a>Contact us</a></p> : <></>}
        </div>
      )}
    </AppContext.Consumer>
  );
}
