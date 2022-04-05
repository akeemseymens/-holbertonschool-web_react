import { filterTypeSelected, getNotifications, getUnreadNotifications } from '../selectors/notificationSelector'
import { fromJS, isMap } from 'immutable'

const state = {
  filter: "DEFAULT",
  notifications: {
    "1" : {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    "2" : {
      id: 2,
      isRead: false,
      type: "urgent",
      value: "New resume available"
    },
    "3" : {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    }
  }
}

const stateWithUnread = {
  filter: "DEFAULT",
  notifications: {
    "1" : {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    "2" : {
      id: 2,
      isRead: true,
      type: "urgent",
      value: "New resume available"
    },
    "3" : {
      id: 3,
      isRead: true,
      type: "urgent",
      value: "New data available"
    }
  }
}

describe('Tests for notification selectors', () => {
  it('(filterTypeSelected(state))Should return the current states filter attribute', () => {
    expect(filterTypeSelected(fromJS(state))).toBe('DEFAULT');
  });
  it('(getNotifications(state))Should return the current states notifications attribute', () => {
    expect(isMap(getNotifications(fromJS(state)))).toBe(true);
    expect(getNotifications(fromJS(state)).toJS()).toEqual(state.notifications);
  });
  it('(getUnreadNotifications(state))Should return the current states unread notifications', () => {
    const expectedUnreadNotifications = {
      1: {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      }
    }
    expect(getUnreadNotifications(fromJS(stateWithUnread)).toJS()).toEqual(expectedUnreadNotifications);
  });
})