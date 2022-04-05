import React from 'react';
import PropTypes from 'prop-types';


//props {type, value, html, markAsRead, id}
class NotificationItem extends React.PureComponent {
  render () {
    if (!this.props.html) {
      return(<li data-priority={this.props.type}  onClick={() => this.props.markAsRead(this.props.id)} >{this.props.value}</li>);
    } else {
      return(<li data-priority={this.props.type}  onClick={() => this.props.markAsRead(this.props.id)}
        dangerouslySetInnerHTML={{ __html: this.props.html.__html }}></li>
      );
    }
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
