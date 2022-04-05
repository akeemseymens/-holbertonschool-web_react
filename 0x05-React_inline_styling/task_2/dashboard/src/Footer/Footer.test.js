import { shallow } from 'enzyme';
import Footer from './Footer';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';

let wrapper = null;
StyleSheetTestUtils.suppressStyleInjection();

beforeEach(() => {
  wrapper = shallow(<Footer />);
});


describe('Footer Prop', () => {
  it("Checks if the Footer component is rendered properly without error", () => {
    expect(wrapper.exists('.App-footer')).toBeTruthy()
  });

  it("Checks if the component at the very least renders the text “Copyright”", () => {
    expect(wrapper.find('.App-footer p').text().includes('Copyright')).toBeTruthy();
  });
});
