import React from 'react'
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux"
import { storeBedDetails } from './Action/ActionCreator';

function BedDetails(props) {

    const {register,handleSubmit,formState: { errors },} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
        dispatch(storeBedDetails(data))
      };
    
    return (

        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <h5>Please select each ward/floor and add room and beds available on selected 
        ward/floor. If no rooms available enter bed names directly. </h5>
        <br / >
        <button>Add Room</button>
        <button>Bed Number</button>
        
        <br / >
        <br / >

        <input type="checkbox" {...register("icu")} /> <span>ICU</span>
        <input type="checkbox" {...register("Genral Ward")} /> <span>General Ward</span>
        <input type="checkbox" {...register("Special")} /> <span>Special Ward</span>
        <input type="checkbox" {...register("CCU")} /> <span>CCU</span>
        <input type="checkbox" {...register("SICU")} /> <span>SICU</span>

        <br />
        <br />
        <br />

        <button onClick={()=>{
                props.backtodepartment(4)
            }} type="button" >BACK</button>
        <button type="button" >SKIP</button>

        <button type="submit" onClick={()=>{
            setTimeout(()=>{
                console.log("clicked")
            },100)
            }}>NEXT</button>

        </form>
        </div>

    )
}

export default BedDetails
