import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications'
import { getLatestNotification } from '../utils/utils.js';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import CourseList from '../CourseList/CourseList'
import PropTypes from 'prop-types';

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
      <React.Fragment>
        <div className="App">
        <root-notifications>
          <Notifications listNotifications={listNotifications}/>
        </root-notifications>
          <Header />
          <div className='App-body'>
            {this.props.isLoggedIn === false ? (
              <React.Fragment>
                <p>Login to access the full dashboard</p>
                <Login />
              </React.Fragment>
            ) : (
              <CourseList listCourses={listCourses}/>
            )}
          </div>
          <Footer />
        </div>
      </React.Fragment>
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
