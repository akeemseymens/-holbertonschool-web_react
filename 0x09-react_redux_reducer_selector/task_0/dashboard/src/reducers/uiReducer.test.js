import { uiReducer } from './uiReducer';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
}

describe('Tests for uiReducer', () => {
  it('Should (when no action is passed) return initialState', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  })
  it('Should return initialState when a unrecognized type: is passed', () => {
    expect(uiReducer(undefined, {type: 'SELECT_COURSE'})).toEqual(initialState);
  })
  it('Should change isNotificationDrawerVisible property when type: DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const newState = { ...initialState, isNotificationDrawerVisible: true };
    expect(uiReducer(undefined, {type: 'DISPLAY_NOTIFICATION_DRAWER'})).toEqual(newState);
  })
});
