import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList'
import CourseListRow from './CourseListRow'

let wrapper = null;



describe('CourseList Component tests with listCourses={[]}', () => {
  beforeEach(() => {
    wrapper = shallow(<CourseList listCourses={[]}/>);
   });
  it("Checks if the CourseList component is rendered properly without error", () => {
    expect(wrapper.exists('#CourseList')).toBeTruthy()
  });
  it('Should render 3 <CourseListRow> components', () => {
    expect(wrapper.find(CourseListRow).length).toBe(3);
  });
  it('Should render "No course available yet" <CourseListRow>', () => {
    expect(wrapper.find(CourseListRow).at(2).render().text()).toBe("No course available yet");
  });
});

describe('CourseList Component test with nothing passed', () => {
  beforeEach(() => {
    wrapper = shallow(<CourseList/>);
   });
  it('Should render "No course available yet" <CourseListRow>', () => {
    expect(wrapper.find(CourseListRow).at(2).render().text()).toBe("No course available yet");
  });
});


describe('CourseList Component tests with listCourses={[CONTENT]}', () => {
  const listCourses = [
    {id: 1, name:"ES6", credit: 60},
    {id: 2, name:"Webpack", credit: 20},
    {id: 3, name:"React", credit: 40}
  ]
  beforeEach(() => {
    wrapper = shallow(<CourseList listCourses={listCourses}/>);
   });
  it("Checks if the CourseList component is rendered properly without error", () => {
    expect(wrapper.exists('#CourseList')).toBeTruthy()
  });
  it('Should render 5 <CourseListRow> components', () => {
    expect(wrapper.find(CourseListRow).length).toBe(5)
  });
  it('<CourseListRow> components render proper content', () => {
    expect(wrapper.find(CourseListRow).at(2).render().text()).toBe("ES660")
    expect(wrapper.find(CourseListRow).at(3).render().text()).toBe("Webpack20")
    expect(wrapper.find(CourseListRow).at(4).render().text()).toBe("React40")
  });
});

