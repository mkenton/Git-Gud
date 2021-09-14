import Lab from './Lab'
function LabContainer({labs}) {
    return (
        <div>
            <h1>TESTING</h1>
            {labs.map((lab) => (
            <Lab key={lab.id} lab={lab}/>
      ))}

        </div>
    )

}

export default LabContainer