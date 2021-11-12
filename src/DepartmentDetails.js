import React from 'react'
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux"
import { storeDepartmentDetails } from './Action/ActionCreator';


function DepartmentDetails(props) {
    const {register,handleSubmit,formState: { errors },} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
        dispatch(storeDepartmentDetails(data))
      };
    
    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h5>Please Choose All Available Departments in your Hospital</h5>
            <br/>

         <label>Department Name</label>
              
        <select name="state" id="state" {...register("state")}>
                  <option value="uttarakhand">Uttarakhand</option>
                  <option value="delhi">Delhi</option>
                  <option value="mombai">Mombai</option>
                  <option value="pune">Pune</option>
        </select>

            <br />
            <br />

            <button onClick={()=>{
                props.backtodepartment(2)
            }}>BACK</button>
            <button>SKIP</button>
            <button type="submit" onClick={()=>{
            setTimeout(()=>{
                props.backtodepartment(4);
            },100)
            }}>NEXT</button>
    </form>

        </div>
    )
}

export default DepartmentDetails
