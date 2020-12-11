import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { ListGroup, ListGroupItem } from 'reactstrap';

class StudentList extends Component {
  render() {
    let students = this.props.students
    return (
      <ListGroup>
        { students.map((student) => (
          <ListGroupItem>
            <h3>{student['first_name']} {student['last_name']}</h3>
          </ListGroupItem>
        ))}
      </ListGroup>
    )

  }
}

export default StudentList