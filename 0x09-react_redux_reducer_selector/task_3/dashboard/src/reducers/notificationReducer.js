import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS,
} from '../actions/notificationActionTypes'

const initialState = {
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
};

export const notificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: return {
      ...state,
      notifications: (action.data.map(x => { return { ...x, isRead: false }}))
    }
    case MARK_AS_READ: return {
      ...state,
      notifications: (state.notifications.map((x) => {
        return (x.id == action.index ? { ...x, isRead: true } : { ...x })
      }))
    }
    case SET_TYPE_FILTER: return {
      ...state,
      filter: NotificationTypeFilters[action.filter]
    }
    default: return (
      state
    )
  }
}
