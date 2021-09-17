function Lab({ lab, handleUpdate, handleDelete }) {

    console.log(lab.student.user_name)

    return (
        <div className="lab-info">
            <p className="lab-name">{lab.name}</p>
            <p><strong>{lab.student.user_name}</strong> | Number of Commits: {lab.num_commits} | Submitted at: {lab.time_of_commit}</p>
            <p>Completed: {lab.completed}</p>
            <button style={{ 'color': lab.tasked ? 'white' : '', 'backgroundColor': lab.tasked ? 'green' : '' }} onClick={() => handleUpdate(lab)} className="buttons">{lab.tasked ? "Tasked!" : "Add to Tasks"}</button>
            <button onClick={() => handleDelete(lab.id)} className="buttons">Remove lab</button>
        </div>
    )

}

export default Lab