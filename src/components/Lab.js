function Lab({ lab, handleUpdate, handleDelete }) {

    console.log(lab.student.user_name)

    return (
        <div className="lab-info">
            <p className="lab-name">{lab.name}</p>
            <p><strong>{lab.student.user_name}</strong></p>
            <p>Number of Commits: <em>{lab.num_commits}</em></p>
            <p>Submitted at: <em>{lab.time_of_commit}</em></p>
            <p style={{ 'color': lab.completed==="Yes" ? 'green' : 'red'}}> {lab.completed==="Yes" ? "Completed" : "Incomplete"}</p>
            <button style={{ 'color': lab.tasked ? 'white' : '', 'backgroundColor': lab.tasked ? 'green' : '' }} onClick={() => handleUpdate(lab)} className="buttons">{lab.tasked ? "Tasked!" : "Add to Tasks"}</button>
            <button onClick={() => handleDelete(lab.id)} className="buttons">Remove lab</button>
        </div>
    )

}

export default Lab