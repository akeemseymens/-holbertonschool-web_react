import React from 'react';
import PropTypes from 'prop-types';

// Props {title: string, children: htmlTag}
class BodySection extends React.Component {
  render () {
    return (
      <>
        <div className='bodySection'>
          <h2>{this.props.title}</h2>
          {this.props.children}
        </div>
      </>
    );
  }
}

BodySection.defaultProps = {
  title: "default",
  children: <></>,
};

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default BodySection;
