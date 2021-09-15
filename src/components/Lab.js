function Lab({lab}) {
    
    return (
        <div>
            <p>{lab.name}</p>
            <p>Number of Commits: {lab.num_commits}</p>
            <p>Submitted at: {lab.time_of_commit}</p>
        </div>
    )

}

export default Lab