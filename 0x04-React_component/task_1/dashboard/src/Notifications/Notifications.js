/* Notifications element for App.js... */
import React from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css'
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape'

function Notifications({displayDrawer, listNotifications}) {
  return (
    <React.Fragment>
      <div className='menuItem'>
        Your Notifications
      </div>
      {displayDrawer ? (
          <div className='Notifications' display={displayDrawer}>
            <ul className='notification-list'>
              { listNotifications.length === 0 ? (
                  <NotificationItem type='default' value='No new notifications for now' />
                ) : (
                  <React.Fragment>
                    <p>Here is the list of notifications</p>
                    {listNotifications.map((notification) =>
                      <NotificationItem key={notification.id}
                                        html={notification.html}
                                        type={notification.type}
                                        value={notification.value}
                      />
                    )}
                  </React.Fragment>
                )}
            </ul>
            <button
                aria-label="Close"
                onClick={() => {
                  console.log('Close button has been clicked');
                }}
                style={{
                  position: 'absolute',
                  right: '20px',
                  top: '15px',
                  width: '20px',
                  height: '20px',
                  background: 'none',
                  border: 'none'
                }}
              >
              <img src={closeIcon} alt='closeIcon' style={{width: '20px', height: '20px',}} />
            </button>
          </div>
        ) : ( 
          <></>
        )
      }
    </React.Fragment>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}

export default Notifications;