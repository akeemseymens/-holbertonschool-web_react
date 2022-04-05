import { shallow } from 'enzyme';
import App from './Footer';
import React from 'react';

let wrapper = null;
beforeEach(() => {
  wrapper = shallow(<App />);
});


describe('Footer Prop', () => {
  it("Checks if the Footer component is rendered properly without error", () => {
    expect(wrapper.exists('.App-footer')).toBeTruthy()
  });

  it("Checks if the component at the very least renders the text “Copyright”", () => {
    expect(wrapper.find('.App-footer p').text().includes('Copyright')).toBeTruthy();
  });
});
