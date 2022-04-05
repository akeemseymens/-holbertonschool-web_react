import { selectCourse, unselectCourse } from './courseActionCreators'
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes'

describe('Tests for selectCourse() function', () => {
  it('Should return a complete Redux Action object with a index passed', () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1});
  });
});

describe('Tests for  unselectCourse() function', () => {
  it('Should return a complete Redux Action object with a index passed', () => {
    expect(unselectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1});
  });
});