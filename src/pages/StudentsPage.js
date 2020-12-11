import React, { Component } from 'react'
import {fetchStudentByID,fetchStudents} from '../APIs/StudentsAPI.js'
import StudentList from '../components/StudentList'
class StudentsPage extends Component {
  state = {
    students: []
  }

  async componentDidMount() {
    try {
      const students = await fetchStudents();
      console.log('students', students.students)
      this.setState({ students: students.students });
      console.log('students', this.state.students)
    } catch (e) {
      console.error('error fetching students: ', e);
    }
  }

  render() {
    return (
      <div>
        <h1> Students Page </h1>
        <StudentList students = {this.state.students} />
      </div>
    )
  }
}

export default StudentsPage