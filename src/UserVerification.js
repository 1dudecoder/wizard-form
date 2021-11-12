import React from 'react'
import { useForm } from "react-hook-form"
import {useDispatch, useSelector} from "react-redux"
import { storeUserOTP } from './Action/ActionCreator';


function UserVerification(props) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data)

        let myobject = Object.values(data);
        let phoneotp = ""
        for(let i = 1; i < myobject.length; i++){
            phoneotp += myobject[i];
        }
        let phonenumber = myobject[0]
        dispatch(storeUserOTP({phoneotp , phonenumber}))
        props.backtodepartment(2)
    }

    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}> 
            <h5>We have sent OTP to your Mobile Number.</h5>
            <label>Mobile No.</label>
            <input type="number" {...register("phonenumber")} />
            <br />
            <br />
            <label>Verify your Email</label>
                <br/>
                <input {...register("num1")} type="text" placeholder="0" maxLength="1" />
                <input {...register("num2")} type="text" placeholder="0" maxLength="1" />
                <input {...register("num3")} type="text" placeholder="0" maxLength="1" />
                <input {...register("num4")} type="text" placeholder="0" maxLength="1" />
                <input {...register("num5")} type="text" placeholder="0" maxLength="1" />

            <h4>timer</h4>

            <button type="submit">NEXT</button>
        </form>
    </div>
    )
}

export default UserVerification
