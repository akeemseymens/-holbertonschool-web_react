import {
  UNSELECT_COURSE,
  SELECT_COURSE,
  FETCH_COURSE_SUCCESS
} from '../actions/courseActionTypes'
import { Map } from 'immutable'
import { coursesNormalizer } from '../schema/courses'

const initialState = {};

export const courseReducer = (state = Map(initialState), action) => {
  switch(action.type) {
    case FETCH_COURSE_SUCCESS: {
      return (
        state.merge(coursesNormalizer(action.data))
      )
    }
    case SELECT_COURSE: return (
      state.setIn([String(action.index), 'isSelected'], true)
    )
    case UNSELECT_COURSE: return (
      state.setIn([String(action.index), 'isSelected'], false)
    )
    default: return (
      state
    )
  }
}
