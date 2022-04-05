/**
 * @jest-environment jsdom
 */
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';
import { AppContext, logOut } from '../App/AppContext'
import React from 'react';

let wrapper = null;
const user = {
  email: 'John@gmail.com',
  password: 'Doe123',
  isLoggedIn: true
}
StyleSheetTestUtils.suppressStyleInjection();

describe('Renders Header Component properly', () => {
  beforeEach(() => {
    user.isLoggedIn = true;
    wrapper = mount(<AppContext.Provider value={{user, logOut}}><Header/></AppContext.Provider>);
  });
  
  it("Checks if the Header component is rendered properly without error", () => {
    expect(wrapper.exists('.App-header')).toBeTruthy()
  });

  it("Renders img tag properly", () => {
    expect(wrapper.exists('.App-header img')).toBeTruthy()
  });

  it("renders h1 tag properly", () => {
    expect(wrapper.exists('.App-header h1')).toBeTruthy()
  });
});

describe('Tests for when "user" in AppContext is still default (isLoggedIn == false in user)', () => {
  beforeEach(() => {
    user.isLoggedIn = false;
    wrapper = mount(<AppContext.Provider value={{user, logOut}}><Header/></AppContext.Provider>);
  });
  it('Should not display logout section under header', () => {
    expect(wrapper.exists('#logoutSection')).toBeFalsy()
  });
});

describe('Tests for when "user" in AppContext is not default (isLoggedIn == true in user)', () => {
  beforeEach(() => {
    user.isLoggedIn = true;
  });
  it('Should display logout section under header', () => {
    wrapper = mount(<AppContext.Provider value={{user, logOut}}><Header/></AppContext.Provider>);
    expect(wrapper.exists('#logoutSection')).toBeTruthy()
  });
  it('Should verify that clicking on #logoutSection calls logOut()', () => {
    const mockObj = {user: user, logOut: () => {return undefined}}
    const logOutSpy = jest.spyOn(mockObj, 'logOut');
    wrapper = mount(<AppContext.Provider value={mockObj}><Header/></AppContext.Provider>);
    wrapper.find('#logoutSection span').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});