/**
 * @jest-environment jsdom
 */
import { shallow, render, mount } from 'enzyme';
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

describe('Checks if App component is rendered correctly when (isLoggedIn = true)', () => {
  beforeEach(() => {
    wrapper = shallow(<App isLoggedIn={true}/>)
  });
  it("should not display Login", () => {
    expect(wrapper.find('.App-body').render().find('.login-form').length).toBe(0);
  });

  it("should display CourseList", () => {
    expect(wrapper.find('.App-body').render().find('#CourseList').length).toBe(1);
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