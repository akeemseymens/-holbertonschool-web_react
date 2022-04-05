import * as DB from '../../notifications.json'
import { normalize, schema } from 'normalizr';

/* getAllNotificationsByUser - accepts userId as an argument
* Return - A list containing all the context objects from the
* notifications.json data when the author id is the same as the userId
*/
function getAllNotificationsByUser(userId) {
  const context = [];
  DB.default.forEach( item =>
    item.author.id == userId ? context.push(item.context) : null
  );
  return (context)
}

// Schema Entity's
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notification', {
  author: user,
  context: message,
});

const normalizedData = normalize(DB.default, [notification]);

export { getAllNotificationsByUser, normalizedData };
