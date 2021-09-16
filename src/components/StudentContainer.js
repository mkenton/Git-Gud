import Student from './Student'

function StudentContainer({students}) {
    
    return (
        <div className="app-container">
            {/* {students[0]} */}
            
            
            {students.map((student) => (
            <Student key={student.id} student={student}/>
            ))}
        </div>
    )
}

export default StudentContainer