import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import {fetchStudentByID,fetchStudents} from '../APIs/StudentsAPI.js'
class StudentPage extends Component {

  render() {
    return (
      <h1> Student Page </h1>
    )
  }
}

export default StudentPage