import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes'
import { bindActionCreators } from 'redux'

function selectCourse(index) {
  return ({ type: SELECT_COURSE, index: index });
}

function unselectCourse(index) {
  return ({ type: UNSELECT_COURSE, index: index });
}

//bind action creatos using passed store.dispatch
function bindCourseActions(dispatch) {
  return ( bindActionCreators({selectCourse, unselectCourse}, dispatch));
}

export { selectCourse, unselectCourse, bindCourseActions};
