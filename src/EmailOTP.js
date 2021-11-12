import React from 'react'
import { useForm } from "react-hook-form"
import {useDispatch, useSelector} from "react-redux"
import { object } from 'yup/lib/locale';
import { storeEmailOTP } from './Action/ActionCreator';

function EmailOTP(props) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    
    const onSubmit = (data) => {
        console.log(data)
        let myobject = Object.values(data);
        let otp = ""
        for(let i = 0; i < myobject.length; i++){
            otp += myobject[i];
        }
        dispatch(storeEmailOTP(otp))
        props.backtodepartment(1)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} > 
            <div className="Container">
                <h4> Welcome to Daily Doc </h4>
                <h6>Enter the six digit code we sent to your email address to verify
                    your daily doc account </h6>
                <label>Verify your Email</label>
                <br/>
                <input {...register("num1")} type="text" placeholder="0" maxlength="1" />
                <input {...register("num2")} type="text" placeholder="0" maxlength="1" />
                <input {...register("num3")} type="text" placeholder="0" maxlength="1" />
                <input {...register("num4")} type="text" placeholder="0" maxlength="1" />
                <input {...register("num5")} type="text" placeholder="0" maxlength="1" />

                <br />
                <button type="submit">Verfiy Email</button>
            </div>
        </form>
    )
}

export default EmailOTP
