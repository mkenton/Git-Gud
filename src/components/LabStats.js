import Task from './Task'


function LabStats({ labs, handleUpdate, handleDelete, handleCompleted }) {

    const filteredLabs = labs.filter(lab => lab.tasked)

    return (
        <div className="app-container">
            {filteredLabs.map(lab => (
            <Task 
                key={lab.id} 
                lab={lab} 
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                handleCompleted={handleCompleted}
                />
            ))}
        </div>
    )
}

export default LabStats