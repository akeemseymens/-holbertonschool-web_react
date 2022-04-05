import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './courseActionTypes'
import { bindActionCreators } from 'redux'

function login(email, password) {
  return ({ type: LOGIN, user: { email, password } });
}

function logout() {
  return ({ type: LOGOUT });
}

function displayNotificationDrawer()  {
  return ({ type: DISPLAY_NOTIFICATION_DRAWER });
}

function hideNotificationDrawer()  {
  return ({ type: HIDE_NOTIFICATION_DRAWER });
}

//bind action creatos using passed store.dispatch
function bindUiActions(dispatch) {
  return (bindActionCreators({ login, logout, displayNotificationDrawer, hideNotificationDrawer }, dispatch));
}

export { login, logout, displayNotificationDrawer, hideNotificationDrawer, bindUiActions };
