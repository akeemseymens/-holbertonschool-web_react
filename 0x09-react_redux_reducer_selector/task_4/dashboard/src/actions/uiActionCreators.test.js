import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest, loginSuccess, loginFailure } from './uiActionCreators'
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { expect } from '@jest/globals'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Tests for loginRequest() function', () => {
  it('Gives proper response on loginSuccess', () => {
    fetch.mockResponse(JSON.stringify({test: 'test'}));
    const store = mockStore({})
    return (
      store.dispatch(loginRequest('test@test.com', 'testpassword'))
        .then(() => {
          const actions = store.getActions()
          expect(actions[1]).toEqual(loginSuccess());
          expect(actions[0]).toEqual(login('test@test.com', 'testpassword'));
        })
    )
  })
  it('Gives proper response on loginFailure', () => {
    fetch.mockReject(JSON.stringify({test: 'test'}));
    const store = mockStore({})
    return (
      store.dispatch(loginRequest('test@test.com', 'testpassword'))
        .catch(() => {
          const actions = store.getActions()
          expect(actions[1]).toEqual(loginFailure());
        })
    )
  })
});

describe('Tests for login([email], [password]) function', () => {
  it('Should return a complete Redux Action object', () => {
    expect(login('test@gmail.com', '1234')).toEqual({
      type: LOGIN, user: {email: 'test@gmail.com', password: '1234'}
    });
  });
});

describe('Tests for logout() function', () => {
  it('Should return a complete Redux Action object', () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });
});

describe('Tests for displayNotificationDrawer() function', () => {
  it('Should return a complete Redux Action object', () => {
    expect(displayNotificationDrawer()).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });
});

describe('Tests for hideNotificationDrawer() function', () => {
  it('Should return a complete Redux Action object', () => {
    expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});