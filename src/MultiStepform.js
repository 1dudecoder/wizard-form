import React,{useState} from 'react'
import AdminDetails from './AdminDetails'
import BedDetails from './BedDetails'
import DepartmentDetails from './DepartmentDetails'
import EmailOTP from './EmailOTP'
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
            return <Emailverfication backtodepartment={goback} />
            case 10: 
            return <EmailOTP backtodepartment={goback}/>

            case 1 :
            return <AdminDetails backtodepartment={goback}/>  
            case 11 : 
            return <UserVerification backtodepartment={goback} />

            case 2 : 
            return <HospitalDetails backtodepartment={goback} />
            case 3 : 
            return <DepartmentDetails backtodepartment={goback}/>
            case 4 : 
            return <WardDetails backtodepartment={goback} />
            case 5 : 
            return <BedDetails backtodepartment={goback} />
            
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

                <h4 onClick={()=>{
                    setMyStep(5)
                }}>Bed Details</h4>    
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
