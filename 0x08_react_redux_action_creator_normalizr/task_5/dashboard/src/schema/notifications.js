import * as DB from '../../notifications.json'
import { normalize, schema } from 'normalizr';

// Schema Entity's
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notification', {
  author: user,
  context: message,
});

const normalizedData = normalize(DB.default, [notification]);

/* getAllNotificationsByUser - accepts userId as an argument
* Return - A list containing all the context objects from the
* normalizedData when the author id is the same as the userId
*/
function getAllNotificationsByUser(userId) {
  const context = [];
  Object.values(normalizedData.entities.notification).forEach( notification =>
    notification.author == userId ? context.push(normalizedData.entities.messages[notification.context]) : null
  );
  return (context)
}

export { getAllNotificationsByUser, normalizedData };
