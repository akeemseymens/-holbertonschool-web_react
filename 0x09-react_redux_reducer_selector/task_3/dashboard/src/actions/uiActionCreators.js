import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE} from './uiActionTypes.js'
import { bindActionCreators } from 'redux'
import fetch from 'node-fetch';

function login(email, password) {
  return {
      type: LOGIN,
      user: {
          email, password 
        }
    }
}

function logout() {
  return ({ type: LOGOUT });
}

function displayNotificationDrawer() {
  return ({ type: DISPLAY_NOTIFICATION_DRAWER });
}

function hideNotificationDrawer() {
  return ({ type: HIDE_NOTIFICATION_DRAWER });
}

function loginSuccess() {
  return ({ type: LOGIN_SUCCESS });
}

function loginFailure() {
  return ({ type: LOGIN_FAILURE });
}

//binds login  using passed store.dispatch and get user on login success
function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch('http://localhost:8080/login-success.json')
      .then((res) => res.json()) // Data response
      .then(() => dispatch(loginSuccess())) // Action response on success
      .catch((error) => dispatch(loginFailure())) // Action respons on failure
  }
}

//bind action creators using passed store.dispatch
function bindUiActions(dispatch) {
  return (bindActionCreators({ login, logout, displayNotificationDrawer, hideNotificationDrawer }, dispatch));
}

export { login, logout, displayNotificationDrawer, hideNotificationDrawer, bindUiActions, loginRequest, loginSuccess, loginFailure };
