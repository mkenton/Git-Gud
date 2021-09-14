
function Lab({lab}) {
    
    
    return (
        <div>
            <p>
                This lab is {lab.name}. It has {lab.num_commits} commmits. Submitted at {lab.time_of_commit} by {lab.student_id}
            </p>
        </div>
    )

}

export default Lab