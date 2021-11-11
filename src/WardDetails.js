import React from 'react'
import { useForm } from "react-hook-form";

function WardDetails(props) {
    const {register,handleSubmit,formState: { errors },} = useForm();

    const onSubmit = (e) => {
        console.log(e);
      };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>    
            <h5>Please Add All Wards Available in your Hospital</h5>
            <h6>Ward/Floor Name</h6>
            <input type="text" {...register("Department")}/>
            <br/>  
            <br/>  
            <button type="button" onClick={()=>{
                props.backtodepartment(3)
            }}>BACK</button>
            <button type="button">SKIP</button>
            <button type="submit" onClick={()=>{
                setTimeout(()=>{
                    console.log("HELLOW BRO")
                },100)
            }}>NEXT</button>
            </form>

        </div>
    )
}

export default WardDetails
