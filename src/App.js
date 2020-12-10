import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.js'
import StudentPage from './pages/StudentPage.js'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/students/:student_id" component={StudentPage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App