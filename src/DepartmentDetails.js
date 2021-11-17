import React from 'react'
import {useDispatch} from "react-redux"
import { storeDepartmentDetails } from './Action/ActionCreator';
import { Formik, Form, Field } from "formik";

function DepartmentDetails(props) {
    const dispatch = useDispatch();

    const onSubmitData = (data) => {
        console.log(data);
        dispatch(storeDepartmentDetails(data))
      };
    
    return (

        <Formik initialValues={{
            departments: ""
        }}
        onSubmit={onSubmitData}
        >
            <Form>
                <div>logo</div>
                <div>
                <h5>Please Choose All Available Departments in your Hospital</h5>
                <label>Department Name</label>
                    <Field name="departments" type="text" />
                </div>
                <div>
                    <button type="button" onClick={()=>{
                         props.backtodepartment(2)
                    }}>BACK</button>
                    <button type="button">SKIP</button>
                    <button type="submit">NEXT</button>
                </div>
            </Form>
        </Formik>

    )
}

export default DepartmentDetails
