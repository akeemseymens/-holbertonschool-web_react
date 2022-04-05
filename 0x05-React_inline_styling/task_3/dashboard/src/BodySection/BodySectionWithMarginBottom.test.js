import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'
import { shallow, render } from 'enzyme';

let wrapper = null;
StyleSheetTestUtils.suppressStyleInjection();

describe('Testing BodySectionWithMarginBottom render()', () => {
  beforeEach(() => {
    wrapper = null;
    wrapper = shallow(
      <BodySectionWithMarginBottom title='title test'><p>Test child</p></BodySectionWithMarginBottom>
    );
  })
  it('should render a BodySection component', () => {
    let renderBodySection = wrapper.find('.bodySectionWithMargin').render();
    expect(renderBodySection.find('.bodySection').length).toEqual(1);
    expect(renderBodySection.find('h2').text()).toBe('title test');
    expect(renderBodySection.find('p').text()).toBe('Test child');
  })
})
