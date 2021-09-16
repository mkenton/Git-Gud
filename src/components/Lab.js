function Lab({lab, handleCompleted}) {
    
    return (
        <div className="lab-info">
            <p className="lab-name">{lab.name}</p>
            <p>Student ID: {lab.student_id}</p>
            <p>Number of Commits: {lab.num_commits}</p>
            <p>Submitted at: {lab.time_of_commit}</p>
            <p>Completed: {lab.completed}</p>
            <button onClick={() => handleCompleted(lab.id)} className="buttons">Mark as Completed</button>
            <button className="buttons">Remove lab</button>
        </div>
    )

}

export default Lab