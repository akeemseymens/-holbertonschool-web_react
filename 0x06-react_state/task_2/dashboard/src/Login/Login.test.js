/**
 * @jest-environment jsdom
 */
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';
import React from 'react';

let wrapper = null;
StyleSheetTestUtils.suppressStyleInjection();

describe('Tests to determine if <Login \> component is rendered properly', () => {
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("Checks if the Login component is rendered properly without error", () => {
    expect(wrapper.exists('.login-form')).toBeTruthy()
  });

  it("Renders 2 label tags", () => {
    expect(wrapper.find('.login-form').children('label').length).toBe(2);
  });

  it("Renders 2 input tags + #form-submit button", () => {
    expect(wrapper.find('.login-form').children('input').length).toBe(3);
  });
});

describe('Tests if <Login \> component this.state works properly', () => {
  beforeEach(() => {
    wrapper = mount(<Login />);
  });

  it('Should have the submit button disabled by default', () => {
    expect(wrapper.find('#form-submit').props().disabled).toBe(true);
  });

  it('Should activate the submit button when (this.state.enableSubmit == true)', () => {
    wrapper.find('#email').simulate('change', {target: {value: 'test-email'}});
    wrapper.find('#password').simulate('change', {target: {value: 'test-password'}});
    expect(wrapper.find('#form-submit').props().disabled).toBe(false);
  });
})
