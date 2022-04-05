import React from 'react';
import BodySection from './BodySection'
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

let wrapper = null;
StyleSheetTestUtils.suppressStyleInjection();

describe('Testing BodySection component render()', () => {
  beforeEach(() => {
    wrapper = null;
    wrapper = shallow(
      <BodySection title='title test'><p>Test child</p></BodySection>
    );
  })
  it('should render proper numbers of passed children & static h2 element', () => {
    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
  })
  it('should render the correct text for h2 element and child elements', () => {
    expect(wrapper.find('h2').text()).toBe('title test');
    expect(wrapper.find('p').text()).toBe('Test child');
  })
})