/* Notifications element for App.js... */
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape'

class Notifications extends React.Component {
  constructor (props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.listNotifications.length > this.props.listNotifications.length) {
      return true;
    } else {
      return false;
    }
  }
  markAsRead (id) {
    console.log(`Notification $${id} has been marked as read`);
  }
  render () {
    return (
      <React.Fragment>
        <div className={css(styles.NotificationContainer)}>
          <div className={'menuItem ' + css(styles.menuItem)}>
            Your Notifications
          </div>
          {this.props.displayDrawer ? (
              <div className={'Notifications ' + css(styles.Notifications)} display={this.props.displayDrawer}>
                <ul className='notification-list'>
                  { this.props.listNotifications.length === 0 ? (
                      <NotificationItem type='default' value='No new notifications for now' />
                    ) : (
                      <React.Fragment>
                        <p>Here is the list of notifications</p>
                        {this.props.listNotifications.map((notification) =>
                          <NotificationItem key={notification.id}
                                            id={notification.id}
                                            html={notification.html}
                                            type={notification.type}
                                            value={notification.value}
                                            markAsRead={this.markAsRead}
                          />
                        )}
                      </React.Fragment>
                    )}
                </ul>
                <button
                    className={css(styles.buttonStyle)}
                    aria-label="Close"
                    onClick={() => {
                      console.log('Close button has been clicked');
                    }}
                  >
                  <img className={css(styles.buttonImg)} src={closeIcon} alt='closeIcon' style={{width: '20px', height: '20px',}} />
                </button>
              </div>
            ) : ( 
              <></>
            )
          }
        </div>
      </React.Fragment>
    );
  }
} 

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}

const styles = StyleSheet.create({
    NotificationContainer: {
        width: "fit-content",
        position: "absolute",
        right: "10px",
    },
    
    menuItem: {
        width: "fit-content",
        marginLeft: "auto",
    },
    
    Notifications: {
        padding: "0.5rem",
        border: "2px dotted #e0354b",
    },

    buttonImg: {
        width: '20px',
        height: '20px'
    },

    buttonStyle: {
        position: 'absolute',
        right: '20px',
        top: '25px',
        width: '20px',
        height: '20px',
        background: 'none',
        border: 'none'
    },
})

export default Notifications;
