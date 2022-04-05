import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({type, value, html, markAsRead, id}) {
  if (!html) {
    return(<li data-priority={type}  onClick={() => markAsRead(id)} >{value}</li>);
  } else {
    return(<li data-priority={type}  onClick={() => markAsRead(id)}
      dangerouslySetInnerHTML={{ __html: html.__html }}></li>
    );
  }
}

NotificationItem.defaultProps + {
  type: 'default',
  markAsRead: () => {return undefined;},
  id: 0
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  id: PropTypes.number,
  markAsRead: PropTypes.func
}

export default NotificationItem;
