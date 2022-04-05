import * as DB from '../../notifications.json'

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

export { getAllNotificationsByUser };
