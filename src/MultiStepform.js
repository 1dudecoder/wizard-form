import React,{useState} from 'react'
import DepartmentDetails from './DepartmentDetails'
import Emailverfication from './Emailverfication'
import HospitalDetails from './HospitalDetails'
import "./MultiStepform.css"
import UserVerification from './UserVerification'
import WardDetails from './WardDetails'

function MultiStepform() {
    const [mystep, setMyStep ] = useState(0)

    function goback(data) {
        setMyStep(data)
    }


    function abc (step){
        switch (step) {
            case 0 : 
            return <Emailverfication />
            case 1 : 
            return <UserVerification />
            case 2 : 
            return <HospitalDetails backtodepartment={goback} />
            case 3 : 
            return <DepartmentDetails backtodepartment={goback}/>
            case 4 : 
            return <WardDetails backtodepartment={goback} />
            default:
                break;
        }
    }

    return (
        <div>
        <div className="container">
            <div className="titles">
                <h4 onClick={()=>{
                    setMyStep(0)
                }}>Email Verfication</h4>

                <h4 onClick={()=>{
                    setMyStep(1)
                }}>User Verification</h4>   

                <h4 onClick={()=>{
                    setMyStep(2)
                }}>Hostpital Details</h4>

                <h4 onClick={()=>{
                    setMyStep(3)
                }}>Department Details</h4>   

                <h4 onClick={()=>{
                    setMyStep(4)
                }}>Ward Details</h4>   
            </div>

            <div className="my-form">
            {
                abc(mystep)
            } 

            </div>

        </div>


        </div>
    )
}

export default MultiStepform
