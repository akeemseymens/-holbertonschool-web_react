/**
 * @jest-environment jsdom
 */
import { mount } from 'enzyme';
import Footer from './Footer';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, logOut } from '../App/AppContext'

let wrapper = null;
const user = {
  email: 'John@gmail.com',
  password: 'Doe123',
  isLoggedIn: true
};
StyleSheetTestUtils.suppressStyleInjection();

describe('Checks if footer elements are displayed without error', () => {
  beforeEach(() => {
    wrapper = mount(<Footer />);
  });

  it("Checks if the Footer component is rendered properly without error", () => {
    expect(wrapper.exists('.App-footer')).toBeTruthy()
  });

  it("Checks if the component at the very least renders the text “Copyright”", () => {
    expect(wrapper.find('.App-footer p').text().includes('Copyright')).toBeTruthy();
  });
});

describe('Checks if the <a> element works with different loggedin states', () => {
  it('link is not displayed when the user is logged out within the context', () => {
    user.isLoggedIn = false;
    wrapper = mount(<AppContext.Provider value={{user, logOut}}><Footer /></AppContext.Provider>);
    expect(wrapper.exists('.App-footer a')).toBeFalsy();
  });

  it('link is displayed when the user is logged in within the context', () => {
    user.isLoggedIn = true;
    wrapper = mount(<AppContext.Provider value={{user, logOut}}><Footer /></AppContext.Provider>);
    expect(wrapper.exists('.App-footer a')).toBeTruthy();
  });
});
