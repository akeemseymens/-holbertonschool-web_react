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
    if (nextProps.displayDrawer !== this.props.displayDrawer) {
      return (true);
    }
    if (nextProps.listNotifications.length > this.props.listNotifications.length) {
      return (true);
    }
    return false;
  }
  markAsRead (id) {
    console.log(`Notification $${id} has been marked as read`);
  }
  render () {
    return (
      <React.Fragment>
        <div className={css(this.props.displayDrawer ? styles.NotificationsDivResponsive : styles.NotificationsDiv )}>
        <div className={'menuItem ' + css(styles.menuItem)} onClick={this.props.handleDisplayDrawer}>
          { this.props.displayDrawer ? <></> : <p>Your Notifications</p> }
        </div>
          {this.props.displayDrawer ? (
              <div className={'Notifications ' + css(styles.Notifications)} display={`${this.props.displayDrawer}`}>
                <ul className={'notification-list ' + css(styles.listStyle)}>
                  { this.props.listNotifications.length === 0 ? (
                      <NotificationItem type='default' value='No new notifications for now' />
                    ) : (
                      <React.Fragment>
                        <p className={css(styles.listGreet)}>Here is the list of notifications</p>
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
                    id='hide-notifications'
                    className={css(styles.buttonStyle)}
                    aria-label="Close"
                    onClick={this.props.handleHideDrawer}
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

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => null,
    handleHideDrawer: () => null
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleHideDrawer: PropTypes.func,
    handleDisplayDrawer: PropTypes.func,
}

const bounce = {
  '0%': {
      transform: 'translateY(0)',
  },
  '100%': {
      transform: 'translateY(-10px)',
  },
};

const opacity = {
  'from': {
      opacity: 0,
  },

  'to': {
      opacity: 1,
  }
};

const styles = StyleSheet.create({
    NotificationsDiv: {
      paddingTop: '10px',
      width: "fit-content",
      position: "absolute",
      right: "10px",
    },

    NotificationsDivResponsive: {
      paddingTop: '10px',
      width: "fit-content",
      position: "absolute",
      right: "10px",
      '@media (max-width: 980px)': {
        position: "fixed",
        top: '0px',
        right: '3px',
        width: '150vw',
        height: '150vh',
        background: 'white',
        textAlign: 'left'
      },
    },

    listGreet: {
      paddingLeft: '30px',
    },

    menuItem: {
        width: "fit-content",
        marginLeft: "auto",
        ':hover': {
          animationName: [opacity, bounce],
          animationDuration: '0.5s',
          animationIterationCount: '3',
      }
    },

    Notifications: {
        padding: "0.5rem",
        border: "2px dotted red",
        '@media (max-width: 980px)': {
          paddingLeft: '50vw',
          border: "none",
        },
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

    listStyle: {
      fontSize: '20px',
      '@media (max-width: 980px)': {
        padding: '0',
        listStyleType: 'none',
      },
    },
})

export default Notifications;
