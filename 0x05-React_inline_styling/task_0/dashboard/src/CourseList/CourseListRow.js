import React from 'react'
import PropTypes from 'prop-types';

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
  const rowBgColor = { backgroundColor: '#deb5b545' }
  const headBgColor = {backgroundColor: '#f5f5f5ab'}
  return(
    <tr>
      {isHeader === true ? (
        textSecondCell === null ? (
          <th colSpan={2} style={headBgColor}>{textFirstCell}</th>
        ) : (
          <React.Fragment>
            <th style={headBgColor}>{ textFirstCell }</th>
            <th style={headBgColor}>{ textSecondCell }</th>
          </React.Fragment>
        )
      ) : (
        <React.Fragment>
          <td style={rowBgColor}>{ textFirstCell }</td>
          <td style={rowBgColor}>{ textSecondCell }</td>
        </React.Fragment>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
}


CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};


export default CourseListRow;
