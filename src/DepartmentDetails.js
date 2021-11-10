import React from 'react'

function DepartmentDetails(props) {
    return (
        <div>
            <h5>Please Choose All Available Departments in your Hospital</h5>
            <br/>
            <h6>Department Name</h6>

            <input typ="text" />
            <br />
            <br />

            <button onClick={()=>{
                props.backtodepartment(2)
            }}>BACK</button>
            <button>SKIP</button>
            <button onClick={()=>{

            }}>NEXT</button>

        </div>
    )
}

export default DepartmentDetails
