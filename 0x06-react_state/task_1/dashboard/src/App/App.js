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
    super(props);
    this.state = {
      displayDrawer: false
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this)
    this.handleHideDrawer = this.handleHideDrawer.bind(this)
  }

  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true,
    });
  }

  handleHideDrawer() {
    this.setState({
      displayDrawer: false,
    });
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
            <Notifications
              displayDrawer={this.state.displayDrawer}
              listNotifications={listNotifications}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
            />
          </root-notifications>
          <div className={'App-body ' + css(styles.body)}>
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
              <p className={css(styles.newsText)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pretium lectus quam id leo in vitae turpis massa. Aliquet nec ullamcorper sit amet risus nullam eget felis. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Lobortis elementum nibh tellus molestie. Aliquam faucibus purus in massa tempor nec feugiat nisl. Vehicula ipsum a arcu cursus vitae congue. Enim nulla aliquet porttitor lacus luctus accumsan. Habitant morbi tristique senectus et netus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Pellentesque id nibh tortor id. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Vitae elementum curabitur vitae nunc sed velit. Aliquam etiam erat velit scelerisque in dictum. Donec et odio pellentesque diam volutpat commodo sed egestas. Tellus elementum sagittis vitae et leo.</p>
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
  body: {
    display: "flex",
    flexDirection: "column",
  },

  bodyClosed: {
    '@media (max-width: 980px)': {
			display: 'none',
		},
  },
  
  bodyHeight: {
    height: "70%",
  },

  newsText: {
    padding: '30px',
    margin: 0,
    width: "90%",
    paddingBottom: "15%"
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
    marginTop: '100%',
    width: '100%',
    backgroundColor: 'white',
    bottom: '0',
    position: 'fixed',
    borderTop: "3px solid rgb(207, 8, 8); !important",
    textAlign: "center",
  }
});


export default App;