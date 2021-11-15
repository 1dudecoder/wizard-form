import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { storeUserOTP } from './Action/ActionCreator';
import { Formik, Form, Field, ErrorMessage } from "formik";

function UserVerification(props) {

    const dispatch = useDispatch();

    const onSubmitData = (data) => {
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
        <div className="container">
        <div>logo</div>

        <h5>We have sent OTP to your Mobile Number.</h5>

        <Formik initialValues={{
            phonenumber:"",
            num1: "",
            num2: "",
            num3: "",
            num4: "",
            num5: "",
            num6: "",
        }}
        onSubmit={onSubmitData}>

            <Form>
                <label>Mobile No.</label>
                <Field type="number" name="phonenumber" required/>
                <br />
                <br />

                <Field type="text" maxLength="1"  name="num1" onKeyPress="return isNumberKey(event)" required />
                <Field type="text" maxLength="1"  name="num2" onKeyPress="return isNumberKey(event)" required />
                <Field type="text" maxLength="1"  name="num3" onKeyPress="return isNumberKey(event)" required />
                <Field type="text" maxLength="1"  name="num4" onKeyPress="return isNumberKey(event)" required />
                <Field type="text" maxLength="1"  name="num5" onKeyPress="return isNumberKey(event)" required />
                <Field type="text" maxLength="1"  name="num6" onKeyPress="return isNumberKey(event)" required />
                <br />
                <br />
                <button type="submit"> NEXT </button>
            </Form>
        </Formik>



        </div>
    )
}

export default UserVerification
