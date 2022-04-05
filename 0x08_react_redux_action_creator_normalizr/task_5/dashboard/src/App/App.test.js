/**
 * @jest-environment jsdom
 */
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import React from 'react';

let wrapper = null;
StyleSheetTestUtils.suppressStyleInjection();

describe('Checks if App component is rendered correctly', () => {
  beforeEach(() => {
    wrapper = shallow(<App />)
  });
  it("Checks if App is rendered properly without error", () => {
    expect(wrapper.exists('.App')).toBeTruthy()
  });

  it("renders App-Notifications properly", () => {
    expect(wrapper.exists(<Notifications/>));
  });

  it("renders App-header properly", () => {
    expect(wrapper.exists(<Header/>));
  });

  it("renders App-footer properly", () => {
    expect(wrapper.exists(<Footer/>));
  });

  it("renders App-Login properly", () => {
    expect(wrapper.exists(<Login/>));
  });

  it("should not display CourseList", () => {
    expect(wrapper.find('.App-body').render().find('#CourseList').length).toBe(0);
  });
});

describe('Checks if App component this.state.displayDrawer works properly', () => {
  let componentInstance = null;
  beforeEach(() => {
    wrapper = shallow(<App />);
    componentInstance = wrapper.instance();
  });

  it("default state of displayDrawer should be false", () => {
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('should set this.state.displayDrawer to true when handleDisplayDrawer() is called', () => {
    componentInstance.handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('should set this.state.displayDrawer to false when handleHideDrawer() is called', () => {
    componentInstance.handleDisplayDrawer();
    componentInstance.handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
});

describe('Checks if App component is rendered correctly when a user is logged in', () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
    wrapper.setState({
      user: {
        email: 'John',
        password: 'Doe',
        isLoggedIn: true
      }
    });
  });
  it("should not display the login form", () => {
    expect(wrapper.find('.App-body').render().find('.login-form').length).toBe(0);
  });

  it("should display the CourseList element", () => {
    expect(wrapper.find('.App-body').render().find('#CourseList').length).toBe(1);
  });
});

describe('Tests for App this.state changes (logOut() and logIn() methods)', () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
    wrapper.instance().logIn('John@gmail.com', 'doe123');
  });
  it("Should reset this.user back to default when logOut() is called", () => {
    expect(wrapper.state('user').email).toBe('John@gmail.com');
    expect(wrapper.state('user').password).toBe('doe123');
    expect(wrapper.state('user').isLoggedIn).toBe(true);
  });
  it("should set this.user using passed values to logIn(email, password)", () => {
    wrapper.state('logOut')();
    expect(wrapper.state('user').email).toBe('default-email');
    expect(wrapper.state('user').password).toBe('default-password');
    expect(wrapper.state('user').isLoggedIn).toBe(false);
  });
});

describe('Tests if markNotificationAsRead() class method works as intended', () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('Calling markNotificationAsRead() should remove the notification with the given id from this.state', () => {
    const mockNotifications = [
      {id: 1, type: 'default', value: 'test1'},
      {id: 2, type: 'default', value: 'test2'}
    ]
    wrapper.setState({
      listNotifications: mockNotifications
    });
    expect(wrapper.state('listNotifications')).toBe(mockNotifications);
    wrapper.instance().markNotificationAsRead(1); // removed notification with id == 1 in mockNotifications
    mockNotifications.shift() //removes first notification from mockNotifications
    expect(wrapper.state('listNotifications')).toStrictEqual(mockNotifications);
  });
});