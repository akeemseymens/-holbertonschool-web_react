import { markAsRead, setNotificationFilter } from './notificationActionCreators'
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes'

describe('Tests for markAsRead([index]) function', () => {
  it('Should return a complete Redux Action object', () => {
    expect(markAsRead(1)).toEqual({ type: MARK_AS_READ, index: 1 });
  });
});

describe('Tests for setNotificationFilter([filter from NotificationTypeFilters]) function', () => {
  it('Should return a complete Redux Action object', () => {
    expect(setNotificationFilter('DEFAULT')).toEqual({ type: SET_TYPE_FILTER, filter: 'DEFAULT'} );
  });
});
