import React, {useState, useEffect} from 'react'
import Header from './components/Header';
import LabContainer from './components/LabContainer'
import StudentContainer from './components/StudentContainer'
import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link

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
    setLabs(data)}
    ) 
  }, [])

  useEffect(() => {
    fetch(`${API}/students`)
    .then(r => r.json())
    .then(data => {
    console.log(data)
    setStudents(data)}
    ) 
  }, [])

  function updateCompleted(updatedLab){
    console.log(`Updated Lab`, updatedLab)
    setLabs(labs.map((lab) => 
      lab.id !== updatedLab.id ? lab : {...lab, completed: "Yes"
    }))
  }

  function handleCompleted(lab_id){
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

  return (
    <div>
      <Header />      
      <LabContainer labs={labs} handleCompleted={handleCompleted}/>  
    </div>
  );
}

export default App;
