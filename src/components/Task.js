function Task({lab, handleUpdate, handleDelete, handleCompleted}) {
    return (
        <div className="lab-info">
            <p>{lab.completed==="Yes" ? `${lab.name} ✅` : lab.name}</p>
            <button style={{'backgroundColor': 'pink'}}onClick={() => handleUpdate(lab)} className="buttons">{lab.tasked ? "Remove from Task List!" : "Tasked!"}</button>
            <button style={{ 'color': lab.completed==="Yes" ? 'white' : '', 'backgroundColor': lab.completed==="Yes" ? 'green' : '' }} onClick={() => handleCompleted(lab)} className="buttons">{lab.completed==="Yes" ? "Complete!" : "Mark as Complete"}</button>



            {/* <button onClick={() => handleDelete(lab.id)} className="buttons">Remove lab</button> */}
        </div>
    )

}

export default Task