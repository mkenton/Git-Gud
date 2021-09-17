import { useState } from 'react'
import Lab from './Lab'

function LabContainer({labs, handleUpdate, handleDelete}) {

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
            <div className="search-container">
                <form 
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
                            placeholder="  Enter GitHub username..."
                            />
                    </label>
                </form>


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
                            placeholder="  Look up your lab stats by lab name..."
                            />
                    </label>
                </form>
            </div>
            
            {labs
            .filter((post) => post.student.user_name.startsWith(studentSearch))
            .filter((post) => post.name.includes(labSearch))
            .map((lab) => (
            <Lab 
                key={lab.id} 
                lab={lab} 
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                />
            ))}
        </div>
    )
}

export default LabContainer