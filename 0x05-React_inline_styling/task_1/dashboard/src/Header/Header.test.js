import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './Header';
import React from 'react';

let wrapper = null;

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
  wrapper = shallow(<App />);
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


describe('Header Prop', () => {
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
