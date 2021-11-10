import React from 'react'

function WardDetails(props) {
    return (
        <div>
            <h5>Please Add All Wards Available in your Hospital</h5>
            <h6>Ward/Floor Name</h6>
            <input type="text" />
            <br/>  
            <br/>  
            <button onClick={()=>{
                props.backtodepartment();
            }}>BACK</button>
            <button>SKIP</button>
            <button>NEXT</button>
        </div>
    )
}

export default WardDetails
