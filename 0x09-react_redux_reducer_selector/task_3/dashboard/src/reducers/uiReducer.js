//InitialState for UI state
import {
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS 
} from '../actions/uiActionTypes';
import { Map } from 'immutable';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
}

export const uiReducer  = (state = Map(initialState), action) => {
  switch(action.type) {
    case LOGIN_SUCCESS: return (
      state.set('isUserLoggedIn', true)
    )
    case LOGIN_FAILURE || LOGOUT: return (
      state.set('isUserLoggedIn', false)
    )
    case DISPLAY_NOTIFICATION_DRAWER: return (
      state.set('isNotificationDrawerVisible', true)
    )
    case HIDE_NOTIFICATION_DRAWER: return (
      state.set('isNotificationDrawerVisible', false)
    )
    default: return (
      state
    )
  }
}
