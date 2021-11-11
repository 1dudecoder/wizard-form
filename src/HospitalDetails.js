import React from "react";
import { useForm } from "react-hook-form";

function HospitalDetails(props) {
  const {register,handleSubmit,formState: { errors },} = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <h5>Please Enter Hospital Details</h5>
        <h5>Hospital Name</h5>
              <input
                autoComplete="off"
                {...register("hospitalName")}
              />
        <br />
                 <label>Country</label>
              
        <select name="country" id="country" {...register("country")}>
                  <option value="india">INDIA</option>
                  <option value="pakistan">PAKISTAN</option>
                  <option value="sri lanka">SRI LANKA</option>
                  <option value="dubai">DUBAI</option>
                
        </select>
        <br />
                 <label>City</label>
              
        <select name="city" id="city" {...register("city")}>
                  <option value="uttarakhand">Uttarakhand</option>
                  <option value="delhi">Delhi</option>
                  <option value="mombai">Mombai</option>
                  <option value="pune">Pune</option>
        </select>
                 <label>State</label>
              
        <select name="state" id="state" {...register("state")}>
                  <option value="uttarakhand">Uttarakhand</option>
                  <option value="delhi">Delhi</option>
                  <option value="mombai">Mombai</option>
                  <option value="pune">Pune</option>
        </select>


        <br />
        <br />

        <button
          onClick={() => {
            props.backtodepartment(1);
          }}
          type="button"
        >
          Back
        </button>

        <button type="submit"
          onClick={() => {
            setTimeout(()=>{
                props.backtodepartment(3);
            },100)
          }}
        >
          Next
        </button>

    </form>
      </div>
  );
}

export default HospitalDetails;
