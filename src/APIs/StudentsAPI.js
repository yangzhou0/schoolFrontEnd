const BASE_URL = 'http://127.0.0.1:8000/api';

const fetchStudentByID = (studentID) => {
  return fetch(`${BASE_URL}/students/${studentID}`)
    .then((response) => response.json())
}

const fetchStudents = () => {
  return fetch(`${BASE_URL}/students`)
  .then((response) => response.json())
}

export {
  fetchStudentByID,
  fetchStudents
}