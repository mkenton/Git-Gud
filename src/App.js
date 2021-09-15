import React, {useState, useEffect} from 'react'
import LabContainer from './components/LabContainer'
import './App.css';

const API = `http://localhost:9292`

function App() {

  const [labs, setLabs] = useState([]) 
  const [students, setStudents] = useState([])

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

  return (
    <div className="App">
      <LabContainer 
        labs={labs}/>
    </div>
  );
}

export default App;
