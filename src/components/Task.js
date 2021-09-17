function Task({lab, handleUpdate, handleDelete, handleCompleted}) {
    const url = `https://github.com/${lab.student.user_name}/${lab.name}/`
    return (
        <div className="lab-info">
            <a href={url}>{lab.completed==="Yes" ? `${lab.name} ✅` : lab.name}</a>
            <button style={{ 'color': lab.completed==="Yes" ? 'white' : '', 'backgroundColor': lab.completed==="Yes" ? 'green' : '' }} onClick={() => handleCompleted(lab)} className="buttons">{lab.completed==="Yes" ? "Complete!" : "Mark as Complete"}</button>
            <button style={{'backgroundColor': 'pink'}}onClick={() => handleUpdate(lab)} className="buttons">{lab.tasked ? "Remove from Task List!" : "Tasked!"}</button>



            {/* <button onClick={() => handleDelete(lab.id)} className="buttons">Remove lab</button> */}
        </div>
    )

}

export default Task