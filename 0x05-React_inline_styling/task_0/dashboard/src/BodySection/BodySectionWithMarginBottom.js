import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection'
import './BodySection.css'

// Props {title: string, children: htmlTag}
class BodySectionWithMarginBottom extends React.Component {
  render () {
    return (
      <>
        <div className='bodySectionWithMargin'>
          <BodySection {...this.props} />
        </div>
      </>
    );
  }
}

BodySectionWithMarginBottom.defaultProps = {
  title: 'default',
  children: <></>,
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
}

export default BodySectionWithMarginBottom;