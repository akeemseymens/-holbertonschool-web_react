import { Map } from 'immutable';
  // Create a first selector for the filter named filterTypeSelected, that will return the value of the filter
  export const filterTypeSelected = (state) => {
    const filter = state.get('filter');
    return (filter);
  }
  // Create another selector for the notifications named getNotifications, that will return the list of notifications in a Map format
  export const getNotifications = (state) => {
    const notifications = state.get('notifications');
    return (Map(notifications));
  }
  // Create another selector for the notifications named getUnreadNotifications, that will return the list of unread notifications in a Map format
  export const getUnreadNotifications = (state) => {
    const notifications = state.get('notifications').toJS();
    Object.keys(notifications).forEach((x) => {
      if (notifications[x].isRead == true) {
        delete notifications[x];
      }
    });
    return (Map(notifications));
  }
