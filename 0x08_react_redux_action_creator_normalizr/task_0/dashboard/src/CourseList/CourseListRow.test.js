import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow'
import { StyleSheetTestUtils } from 'aphrodite';

let wrapper = null;
StyleSheetTestUtils.suppressStyleInjection();

describe('CourseListRow({isHeader, textFirstCell, textSecondCell}) Component', () => {
  it('should render one cell with colspan = 2 when textSecondCell does not exist', () => {
    wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test'/>);
    expect(wrapper.containsMatchingElement(<th colSpan={2} >test</th>)).toBe(true);
    expect(wrapper.find('tr').children().length).toBe(1);
  });
  it('should render two cells when textSecondCell is present', () => {
    wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' textSecondCell='test2'/>);
    expect(wrapper.find('tr').children('th').length).toBe(2);
  });
  it('should render two td elements when isHeader is false', () => {
    wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='test' textSecondCell='test2'/>);
    expect(wrapper.find('tr').children('td').length).toBe(2);
  });
});
