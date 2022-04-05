import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators'
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './courseActionTypes'

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