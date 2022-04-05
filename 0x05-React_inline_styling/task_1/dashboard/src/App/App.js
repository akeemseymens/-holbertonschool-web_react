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

const styles = StyleSheet.create({
  App: {
  },
  footer: {
  },
  body: {
      height: '60vh'
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
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
    return(
      <>
        <div className='App'>
        <root-notifications>
          <Notifications listNotifications={listNotifications}/>
        </root-notifications>
          <Header />
          <div className={'App-body ' + css(styles.body)}>
            {this.props.isLoggedIn === false ? (
              <>
                <BodySectionWithMarginBottom title='Log in to continue'>
                  <Login />
                </BodySectionWithMarginBottom>
              </>
            ) : (
              <BodySectionWithMarginBottom title='Course List'>
                <CourseList listCourses={listCourses}/>
              </BodySectionWithMarginBottom>
            )}
            <BodySection title='News from the School'>
              <p>Random Text</p>
            </BodySection>
          </div>
          <Footer />
        </div>
        </>
    );
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

export default App;
