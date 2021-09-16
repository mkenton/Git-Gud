import { useState } from 'react'
import Lab from './Lab'

function LabContainer({labs, handleCompleted}) {

    const [studentSearch, setStudentSearch] = useState('')
    const [searchStudent, setSearchStudent] = useState('')
    const [labSearch, setLabSearch] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    function handleStudentSearch(name){
        setStudentSearch(name)
    }

    function handleStudentChange(e) {
        setSearchStudent(e.target.value)
    }

    function handleSearch(lab){
        setLabSearch(lab)
    }

    function handleChange(e) {
        setSearchTerm(e.target.value)
    }
    
    return (
        <div className="app-container">
            {/* <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    handleStudentSearch(searchStudent)
                }}
                    
                className="lab-search">
                <label>
                    <input className="input-box" 
                        type="text" 
                        name="name" 
                        value={searchStudent}
                        onChange={handleStudentChange}
                        placeholder="  Look up your GitHub username..."
                        />
                </label>
            </form> */}

            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch(searchTerm)
                }}
                    
                className="lab-search">
                <label>
                    <input className="input-box" 
                        type="text" 
                        name="name" 
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder="  Look up your lab stats..."
                        />
                </label>
            </form>
            
            {labs
         
            .filter((post) => post.name.startsWith(labSearch))
            .map((lab) => (
            <Lab key={lab.id} lab={lab} handleCompleted={handleCompleted}/>
            ))}
        </div>
    )
}

export default LabContainer