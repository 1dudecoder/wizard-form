import React from 'react'
import { useForm } from "react-hook-form"

function HospitalDetails(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (e) => {
    console.log(e)
}
    return (
        <form onSubmit={ handleSubmit(onSubmit)} >
        <div>
            <h5>Please Enter Hospital Details</h5>
            <h5>Hospital Name</h5>
            <input {...register("Hospital Name",{
                required:true
            })} type="text" />
            <h5>Country</h5>
            <input type="text"/>
            <h5>City</h5>
            <input type="text"/>
            <h5>State</h5>
            <input type="text"/>
            <br />
            <br />
            <button onClick={()=>{
                props.backtodepartment(1)
            }} type="button" >Back</button>
            <button onClick={()=>{
                props.backtodepartment(3)
            }} type="button" >Next</button>
        </div>
        </form>
    )
}

export default HospitalDetails
