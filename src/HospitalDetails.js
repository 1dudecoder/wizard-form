import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import { storeHospitalDetails } from "./Action/ActionCreator";
import { Formik, Form, Field } from "formik";


function HospitalDetails(props) {
  const dispatch = useDispatch();
  const hostpitaldetails = useSelector(state => {
    return state.allformdata.myhospitaldata
  })

  const onSubmitData = (data) => {
    console.log(data);
    dispatch(storeHospitalDetails(data))
  };


  useEffect(()=>{

    if(!Array.isArray(hostpitaldetails)){
        props.backtodepartment(3)
    }

},[hostpitaldetails])


  return (
    <div className="container">
    <Formik initialValues={{ 
                hospitalname:"",
                country:"",
                city:"",
                state:""
            }}
            onSubmit={onSubmitData}> 
    <Form>
      <div>logo</div>
      <h5>Please Enter Hospital Details</h5>
      <div>
      <label>Hospital Name</label>
      <Field name="hospitalname" type="text" />

      <label>Country</label>
      <Field name="country" as="select">
        <option value="INDIA">INDIA</option>
        <option value="PAKISTAN">PAKISTAN</option>
        <option value="USA">USA</option>
      </Field>
      <label>CITY</label>
      <Field name="city" as="select">
        <option value="UTTRAKHAND">UTTRAKHAND</option>
        <option value="DELHI">DELHI</option>
        <option value="PUNE">PUNE</option>
      </Field>  
      <label>STATE</label>
      <Field name="state" as="select">
        <option value="KOTDWARA">KOTDWARA</option>
        <option value="DEHRADUN">DEHRADUN</option>
        <option value="SRINAGAR">SRINAGAR</option>
      </Field>

      <button type="button" onClick={()=>{
            props.backtodepartment(1)
        }}>BACK</button>
      <button type="submit">Next</button>

      </div>

      </Form>
    </Formik>
    </div>
  );
}

export default HospitalDetails;
