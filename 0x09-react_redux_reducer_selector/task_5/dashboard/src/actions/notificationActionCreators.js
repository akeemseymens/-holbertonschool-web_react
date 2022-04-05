import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes'
import { bindActionCreators } from 'redux'

function markAsRead(index) {
  return ({ type: MARK_AS_READ, index: index });
}

function setNotificationFilter(filter) {
  return ({ type: SET_TYPE_FILTER, filter: NotificationTypeFilters[filter]})
}

//bind action creatos using passed store.dispatch
function bindNotificationActions(dispatch) {
  return ( bindActionCreators({markAsRead, setNotificationFilter}, dispatch));
}

export { markAsRead, setNotificationFilter, bindNotificationActions};
