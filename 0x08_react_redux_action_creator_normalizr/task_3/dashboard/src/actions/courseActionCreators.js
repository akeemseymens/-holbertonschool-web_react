import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes'

function selectCourse(index) {
  return ({ type: SELECT_COURSE, index: index });
}

function unselectCourse(index) {
  return ({ type: UNSELECT_COURSE, index: index });
}

export { selectCourse, unselectCourse};
