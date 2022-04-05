import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
  const [checkboxStatus, setCheckboxStatus] = useState(false);

  function handleCheckboxStatus() {
    if (checkboxStatus == true) {
      return (setCheckboxStatus(false));
    }
    return (setCheckboxStatus(true));
  }

  return(
    <>
      {isHeader === true ? (
        textSecondCell === null ? (
          <tr className={css(styles.tableHeaderRow)}>
            <th colSpan={2}>{textFirstCell}</th>
          </tr>
        ) : (
          <tr className={css(styles.tableHeaderRow)}>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </tr>
        )
      ) : (
        <tr className={checkboxStatus ? css(styles.tableRow) : css(styles.rowChecked)}>
          <td><input type="checkbox" onChange={handleCheckboxStatus}/>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </tr>
      )}
    </>
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

const styles = StyleSheet.create({
  tableHeaderRow: {
    borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
    backgroundColor: "#deb5b545"
  },
  tableRow: {
      backgroundColor: '#f5f5f5ab'
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
  }
});

export default CourseListRow;
