function Task({lab, handleUpdate, handleDelete}) {
    return (
        <div className="lab-info">
            <p>{lab.name}</p>
            <button style={{'backgroundColor': 'pink'}}onClick={() => handleUpdate(lab)} className="buttons">{lab.tasked ? "Remove from Task List!" : "Tasked!"}</button>
            {/* <button onClick={() => handleDelete(lab.id)} className="buttons">Remove lab</button> */}
        </div>
    )

}

export default Task