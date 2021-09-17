function Lab({ lab, students, handleUpdate, handleDelete }) {
    const student = students.filter(s => s.id == lab.student_id)
    console.log(student[0].user_name)

    return (
        <div className="lab-info">
            <p className="lab-name">{lab.name}</p>
            {/* <a href= {currentLink}> {lab.name}</a> */}
            <p>Username: {student[0].user_name} | Number of Commits: {lab.num_commits} | Submitted at: {lab.time_of_commit}</p>
            <p>Completed: {lab.completed}</p>
            <button style={{ 'color': lab.tasked ? 'white' : '', 'backgroundColor': lab.tasked ? 'green' : '' }} onClick={() => handleUpdate(lab)} className="buttons">{lab.tasked ? "Tasked!" : "Add to Tasks"}</button>
            <button onClick={() => handleDelete(lab.id)} className="buttons">Remove lab</button>
        </div>
    )

}

export default Lab