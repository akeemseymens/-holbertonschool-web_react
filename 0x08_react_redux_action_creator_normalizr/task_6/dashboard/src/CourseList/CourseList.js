import React from 'react'
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow'
import CourseShape from './CourseShape'


function CourseList({listCourses}) {
  return(
    <div className={css(styles.bodyHeight)}>
      <table id='CourseList' className={css(styles.tableContainer)}>
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true}/>
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
        </thead>
        <tbody>
        { listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" isHeader={false}/>
        ) : (
          <>
            {listCourses.map((row) =>
            <CourseListRow key={row.id} textFirstCell={row.name} textSecondCell={row.credit}/>
            )}
          </>
        )}
        </tbody>
      </table>
    </div>
  );
}

CourseList.defaultProps = {
    listCourses: [],
}
CourseList.protoTypes = {
listCourses: PropTypes.arrayOf(CourseShape),
}
export default CourseList;

const styles = StyleSheet.create({
    bodyHeight: {
        height: "70%",
    },

    tableContainer: {
      width: "80%",
      margin: "0 auto",
      marginTop: "20px",
      border: "2px solid rgba(0, 0, 0, 0.2)",
    },
});
