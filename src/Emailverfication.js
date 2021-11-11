import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import "./Emailverification.css"
import * as yup from "yup"

const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
        cpassword: yup.string().oneOf([yup.ref("password"),null])
});

function Emailverfication() {
        const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), });
        
        const onSubmit = (e) => {
            console.log(e)
        }

         return (
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="formdata">
            <label>Email</label>
              <input
                autoComplete="off"
                {...register("email")}
              />
    
        <p>{errors.email?.message}</p>
            <label>Password</label>
              <input
                type="password"
                onChange={(e)=>{
                }}
                autoComplete="off"
                {...register("password")}
              />
        {errors.password && <p>{errors.password?.message}</p>}

            <label>Re-enter Password</label>
              <input
                type="password"
                autoComplete="off"
                {...register("cpassword")}
              />
        {errors.cpassword && <p> password should be match </p> }
              <br/>
                <button type="submit">Verfiy Email</button>

            </div>

            </form>
          </div>
         )
     }

export default Emailverfication
