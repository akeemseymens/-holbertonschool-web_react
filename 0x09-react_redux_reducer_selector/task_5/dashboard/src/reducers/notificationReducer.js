import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS,
} from '../actions/notificationActionTypes'
import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications'

const initialState = {
  notifications: {},
  filter: NotificationTypeFilters.DEFAULT,
};

export const notificationReducer = (state = Map(initialState), action) => {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: return (
      state.merge({ ...state.toJS(), notifications: notificationsNormalizer(action.data) })
    )
    case MARK_AS_READ: return (
      state.setIn(['notifications', String(action.index), 'isRead'], true)
    )
    case SET_TYPE_FILTER: return (
      state.set('filter', NotificationTypeFilters[action.filter])
    )
    default: return (
      state
    )
  }
}
