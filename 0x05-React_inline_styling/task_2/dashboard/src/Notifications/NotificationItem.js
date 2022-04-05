import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { StyleSheet, css} from 'aphrodite'


//props {type, value, html, markAsRead, id}
class NotificationItem extends React.PureComponent {
  render () {
    if (!this.props.html) {
      return(<li className={this.props.type === "default" ? css(styles.liDefault) : css(styles.liUrgent)} onClick={() => this.props.markAsRead(this.props.id)} >{this.props.value}</li>);
    } else {
      return(<li className={this.props.type === "default" ? css(styles.liDefault) : css(styles.liUrgent)} onClick={() => this.props.markAsRead(this.props.id)}
        dangerouslySetInnerHTML={{ __html: this.props.html.__html }}></li>
      );
    }
  }
}

NotificationItem.defaultProps = {
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

const styles = StyleSheet.create({
    liDefault: {
        color: "blue",
    },
    
    liUrgent: {
        color: "red",
    },
})

export default NotificationItem;
