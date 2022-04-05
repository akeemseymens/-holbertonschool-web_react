import { shallow } from 'enzyme';
import App from './Header';
import React from 'react';

let wrapper = null;
beforeEach(() => {
  wrapper = shallow(<App />);
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
