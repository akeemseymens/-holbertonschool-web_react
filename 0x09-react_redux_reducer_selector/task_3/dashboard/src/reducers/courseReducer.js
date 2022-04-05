import {
  UNSELECT_COURSE,
  SELECT_COURSE,
  FETCH_COURSE_SUCCESS
} from '../actions/courseActionTypes'

const initialState = [];

export const courseReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_COURSE_SUCCESS: return (
      state = (action.data.map(x => { return { ...x, isSelected: false }}))
    )
    case SELECT_COURSE: return (
      state = (state.map((x) => {
        return (x.id == action.index ? { ...x, isSelected: true } : { ...x })
      }))
    )
    case UNSELECT_COURSE: return (
      state = (state.map((x) => {
        return (x.id == action.index ? { ...x, isSelected: false } : { ...x })
      }))
    )
    default: return (
      state
    )
  }
}
