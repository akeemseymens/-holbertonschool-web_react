import React from 'react'
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow'
import CourseShape from './CourseShape'
import './CourseList.css'


const styles = StyleSheet.create({
  courseList: {
    width: '85%',
    border: '0.5px solid',
    borderCollapse: 'collapse',
    margin: 'auto',
    marginTop: '30px',
  },
  table: {
  },
  thead: {
    tr: {
    }
  }

});

function CourseList({listCourses}) {
  return(
    <table id='CourseList' className={css(styles.courseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true}/>
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
      </thead>
      <tbody>
        { listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" isHeader={false}/>
        ) : (
          <React.Fragment>
            {listCourses.map((row) =>
            <CourseListRow key={row.id} textFirstCell={row.name} textSecondCell={row.credit}/>
            )}
          </React.Fragment>
        )}
      </tbody>
    </table>
  );
}

CourseList.defaultProps = {
  listCourses: [],
}


CourseList.protoTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
}
export default CourseList;
