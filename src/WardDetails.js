import React from 'react'
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux"
import { storeWardDetails } from './Action/ActionCreator';


function WardDetails(props) {
    const {register,handleSubmit,formState: { errors },} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(storeWardDetails(data))
        console.log(data)
        props.backtodepartment(5)
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
            <button type="button" onClick={()=>{
                props.backtodepartment(5)
            }} >SKIP</button>
            <button type="submit">NEXT</button>
            </form>
        </div>
    )
}

export default WardDetails
