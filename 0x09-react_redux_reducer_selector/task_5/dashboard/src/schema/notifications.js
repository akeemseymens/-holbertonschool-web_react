import * as DB from '../../dist/notifications.json'
import { normalize, schema } from 'normalizr';

const notificationsProcessStrategy = (value) => {
  return {
    ...value,
    isRead: false
  }
}

// Schema Entity's
const user = new schema.Entity('users', {}, {});
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity(
  'notifications', //Name
  { //Entities
    author: user,
    context: message,
  },
  { //Options
    processStrategy: notificationsProcessStrategy
  }
);

function notificationsNormalizer (data) {
  const normalized = normalize(data, [notification]);
  return ( normalized.entities.notifications );
}

/* getAllNotificationsByUser - accepts userId as an argument
* Return - A list containing all the context objects from the
* normalizedData when the author id is the same as the userId
*/
const normalizedData = normalize(DB.default, [notification]);

function getAllNotificationsByUser(userId) {
  const context = [];
  Object.values(normalizedData.entities.notifications).forEach( notification =>
    notification.author == userId ? context.push(normalizedData.entities.messages[notification.context]) : null
  );
  return (context)
}

export { getAllNotificationsByUser, notificationsNormalizer, normalizedData};
