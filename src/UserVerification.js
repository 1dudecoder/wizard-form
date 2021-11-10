import React from 'react'
import { useForm } from "react-hook-form"


function UserVerification() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (e) => {

    


    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} > 
            <div className="Container">
                <h4> Welcome to Daily Doc </h4>
                <h6>Enter the six digit code we sent to your email address to verify
                    your daily doc account </h6>
                <label>Verify your Email</label>
                <br/>

                <input {...register("num1")} type="text" class="form-control" placeholder="0" maxlength="1"  />
                <input {...register("num2")} type="text" class="form-control" placeholder="0" maxlength="1" />
                <input {...register("num3")} type="text" class="form-control" placeholder="0" maxlength="1" />
                <input {...register("num4")} type="text" class="form-control" placeholder="0" maxlength="1" />

                <br />
                <button type="submit">Verfiy Email</button>
            </div>
        </form>
    )
}

export default UserVerification
