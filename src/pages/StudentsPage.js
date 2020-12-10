import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import {fetchStudentByID,fetchStudents} from '../APIs/StudentsAPI.js'
class StudentsPage extends Component {
  state = {
    students: []
  }

  async componentDidMount() {
    try {
      const students = await fetchStudents();
      console.log('students', students)
      this.setState({ students: students });
    } catch (e) {
      console.error('error fetching students: ', e);
    }
  }

  render() {
    return (
      <div>
        <h1> Students Page </h1>
        <BootstrapTable data={this.state.students}>
          <TableHeaderColumn isKey dataField='id'> ID </TableHeaderColumn>
          <TableHeaderColumn dataField='first_name'> First Name </TableHeaderColumn>
          <TableHeaderColumn dataField='last_name'> Last Name </TableHeaderColumn>
          <TableHeaderColumn dataField='age'> Age </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default StudentsPage