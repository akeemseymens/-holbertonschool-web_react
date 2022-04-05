import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './Login';
import React from 'react';

let wrapper = null;
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
  wrapper = shallow(<App />);
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


describe('Login Prop', () => {
  it("Checks if the Login component is rendered properly without error", () => {
    expect(wrapper.exists('.login-form')).toBeTruthy()
  });

  it("Renders 2 input tags", () => {
    expect(wrapper.find('.login-form').children('label').length).toBe(2);
  });

  it("Renders 2 label tags", () => {
    expect(wrapper.find('.login-form').children('input').length).toBe(2);
  });
});
