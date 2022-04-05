import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({type, value, html}) {
  if (!html) {
    return(<li data-priority={type}>{value}</li>);
  } else {
    return(<li data-priority={type}
      dangerouslySetInnerHTML={{ __html: html.__html }}></li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
}

NotificationItem.defaultProps + {
  type: 'default'
}

export default NotificationItem;
