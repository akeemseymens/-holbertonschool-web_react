import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import CourseList from '../CourseList/CourseList'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils.js';

const listCourses = [
  {id: 1, name:"ES6", credit: 60},
  {id: 2, name:"Webpack", credit: 20},
  {id: 3, name:"React", credit: 40}
]

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent',  value: 'New resume available'},
  {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
]

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  logoutHandler(event) {
    if (event.ctrlKey && event.key == 'h') {
      alert('Logging you out');
      this.props.logout;
    }
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.logoutHandler.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.logoutHandler.bind(this));
  }
  
  render() {
    return (
      <>
        <div className='App'>
          <root-notifications>
            <Notifications listNotifications={listNotifications}/>
          </root-notifications>
          <div className={'App-body ' + css(styles.flexFullHeight)}>
          <Header className={css(styles.appHeader)}/>
          {this.props.isLoggedIn === false ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title='Course List'>
              <CourseList listCourses={listCourses} className={css(styles.bodyHeight)}/>
            </BodySectionWithMarginBottom>
          )}
            <BodySection title="News from the school">
              <p>Random Text</p>
            </BodySection>
            <Footer className={css(styles.footer)}/>
            </div>
          </div>
        </>
        )
      }
    }
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {return;},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

const styles = StyleSheet.create({
  flexFullHeight: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  
  bodyHeight: {
    height: "70%",
  },
  
  appHeader: {
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
    color: "#e0354b",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  
  footer: {
    marginTop: '17%',
    position: "relative",
    bottom: "0",
    width: "100%",
    borderTop: "3px solid rgb(207, 8, 8); !important",
    textAlign: "center",
    padding: "16px 0",
  }
});


export default App;