import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { storeWardDetails } from './Action/ActionCreator';
import { Formik, Form, Field } from "formik";


function WardDetails(props) {
    const dispatch = useDispatch();

    const onSubmitData = (data) => {
        dispatch(storeWardDetails(data))
        console.log(data)
        props.backtodepartment(5)
    };

    return (
        <Formik initialValues={{
            warddetails: ""
        }}
        onSubmit={onSubmitData}
        >
            <Form>
                <div>logo</div>
                <div>
                <h5>Please Add All Wards Available in your Hospital</h5>
                <label>Ward/Floor Name</label>
                    <Field name="warddetails" type="text" />
                </div>
                <div>
                    <button type="button" onClick={()=>{
                         props.backtodepartment(3)
                    }}>BACK</button>
                    <button type="button">SKIP</button>
                    <button type="submit">NEXT</button>
                </div>
            </Form>
        </Formik>
    )
}

export default WardDetails
