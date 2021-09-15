import { useState } from 'react'
import Lab from './Lab'

function LabContainer({labs}) {

    const [labSearch, setLabSearch] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    function handleSearch(lab){
        setLabSearch(lab)
    }

    function handleChange(e) {
        setSearchTerm(e.target.value)
    }
    
    return (
        <div className="app-container">

            <h1 className="gitgud-logo">GitGud</h1>
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
            <Lab key={lab.id} lab={lab}/>
            ))}
        </div>
    )
}

export default LabContainer