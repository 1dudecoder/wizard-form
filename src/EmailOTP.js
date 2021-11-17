import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { storeEmailOTP } from './Action/ActionCreator';
import { Formik, Form, Field } from "formik";

function EmailOTP(props) {
    const dispatch = useDispatch();

    const emailotpdata = useSelector((res)=>{
        return res.allformdata.myemailotpdata
    });

    const onSubmitData = (data) => {
        console.log(data)
        let myobject = Object.values(data);
        let otp = ""
        for(let i = 0; i < myobject.length; i++){
            otp += myobject[i];
        }
        console.log(otp)
        dispatch(storeEmailOTP(otp))
    }

    useEffect(() => {
       
        if(emailotpdata == "user has verified successfully"){
            props.backtodepartment(1)
        }

    }, [emailotpdata])

    return (
        <div className="container">
        <div>
            <img src="logo.png" />
            <h4>Welcome to Daily Doc</h4>
        </div>
        <h6>Enter the six digit code we sent to your email address to verify
your daily doc account </h6>
        <div className="myform">

            <Formik initialValues={{ 
                    num1: "",
                    num2: "",
                    num3: "",
                    num4: "",
                    num5: "",
                    num6: "",
            }}

                onSubmit={onSubmitData}>
                <Form>

                <Field type="text" maxlength="1"  name="num1" onKeyPress="return isNumberKey(event)" />
                <Field type="text" maxlength="1"  name="num2" onKeyPress="return isNumberKey(event)" />
                <Field type="text" maxlength="1"  name="num3" onKeyPress="return isNumberKey(event)" />
                <Field type="text" maxlength="1"  name="num4" onKeyPress="return isNumberKey(event)" />
                <Field type="text" maxlength="1"  name="num5" onKeyPress="return isNumberKey(event)" />
                <Field type="text" maxlength="1"  name="num6" onKeyPress="return isNumberKey(event)" />

                <button type="submit">VERIFY</button>


                </Form>
            </Formik>
        </div>

        </div>
    )
}

export default EmailOTP
