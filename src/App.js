import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import LabContainer from './components/LabContainer'
import LabStats from './components/LabStats'
import StudentContainer from './components/StudentContainer'
import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route, NavLink

} from 'react-router-dom'

const API = `http://localhost:9292`

function App() {

  const [labs, setLabs] = useState([])
  const [students, setStudents] = useState([])
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    fetch(`${API}/labs`)
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setLabs(data)
      }
      )
  }, [])

  useEffect(() => {
    fetch(`${API}/students`)
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setStudents(data)
      }
      )
  }, [])

  function updateCompleted(updatedLab) {
    console.log(`Updated Lab`, updatedLab)
    setLabs(labs.map((lab) =>
      lab.id !== updatedLab.id ? lab : {
        ...lab, completed: "Yes"
      }))
  }

  //TODO: refactor for add to task list
  function updateLab(lab_id) {
    console.log(`Lab ID ${lab_id} is clicked`)
    fetch(`${API}/labs/${lab_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: "Yes"
      })
    })
      .then((r) => r.json())
      .then(updatedLab => updateCompleted(updatedLab))
  }
  // // use this code for updating "completed"
  // function updateLab(lab_id) {
  //   console.log(`Lab ID ${lab_id} is clicked`)
  //   fetch(`${API}/labs/${lab_id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       completed: "Yes"
  //     })
  //   })
  //     .then((r) => r.json())
  //     .then(updatedLab => updateCompleted(updatedLab))
  // }

  function deleteLab(lab_id) {
    fetch(`${API}/labs/${lab_id}`, {
      method: 'DELETE',
      headers: {
        Accepts: 'application/json',
        'Content-type': 'application/json',
      },
    }).then(() => setLabs(labs.filter((lab) => lab.id !== lab_id)));
  }

  return (
    <Router>
      <div>
        <Header />
        <nav className="fixed-navbar">
          <NavLink activeClassName="active-nav-link" className="nav-link" exact to="/">Home</NavLink>
          <NavLink activeClassName="active-nav-link" className="nav-link" to="/lab-stats">Lab Tasks</NavLink>
        </nav>
        <Switch>
          <Route path="/lab-stats">
            <LabStats labs={labs}/>
          </Route>
          <Route exact path="/">
            <LabContainer labs={labs} handleUpdate={updateLab} handleDelete={deleteLab} />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
