import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

function markAsRead(index) {
  return ({ type: MARK_AS_READ, index: index });
}

function setNotificationFilter(filter) {
  return ({ type: SET_TYPE_FILTER, filter: NotificationTypeFilters[filter]})
}

export { markAsRead, setNotificationFilter };
