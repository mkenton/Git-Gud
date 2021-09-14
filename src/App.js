import React, {useState, useEffect} from 'react'
import './App.css';
import LabContainer from './components/LabContainer'
const API = `http://localhost:9292`
function App() {

  const [labs, setLabs] = useState([]) 

  useEffect(() => {
    fetch(`${API}/labs`)
    .then(r => r.json())
    .then(data => {
    // console.log(data)
    setLabs(data)}
    ) 
  }, [])

// console.log(`data = ${data}`)
console.log(labs[0])




  return (
    <div className="App">
      <LabContainer labs={labs}/>
    </div>
  );
}

export default App;
