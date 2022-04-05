import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'
import BodySection from './BodySection'
import { shallow, render } from 'enzyme';

let wrapper = null;

describe('Testing BodySectionWithMarginBottom render()', () => {
  beforeEach(() => {
    wrapper = null;
    wrapper = shallow(
      <BodySectionWithMarginBottom title='title test'><p>Test child</p></BodySectionWithMarginBottom>
    );
    StyleSheetTestUtils.suppressStyleInjection();
  })
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  // in task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.test.js:
  // Add one test checking that shallowing the component should render correctly a BodySection component and that the props are passed correctly to the child component
  it('should render a BodySection component', () => {
    let renderBodySection = wrapper.find('.bodySectionWithMargin').render();
    expect(renderBodySection.find('.bodySection').length).toEqual(1);
    expect(renderBodySection.find('h2').text()).toBe('title test');
    expect(renderBodySection.find('p').text()).toBe('Test child');
  })
})
