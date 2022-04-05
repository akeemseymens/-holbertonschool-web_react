//InitialState for UI state
import {
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS 
} from '../actions/uiActionTypes'

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
}

export const uiReducer  = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS: return {
      ...state,
      isUserLoggedIn: true
    }
    case LOGIN_FAILURE || LOGOUT: return {
      ...state,
      isUserLoggedIn: false
    }
    case DISPLAY_NOTIFICATION_DRAWER: return {
      ...state,
      isNotificationDrawerVisible: true
    }
    case HIDE_NOTIFICATION_DRAWER: return {
      ...state,
      isNotificationDrawerVisible: false
    }
    default: return (
      state
    )
  }
}
