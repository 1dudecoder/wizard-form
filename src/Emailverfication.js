import React,{useEffect} from 'react'
import "./Emailverification.css"
import * as yup from "yup"
import { useDispatch, useSelector} from "react-redux"
import {storeEmailVerification} from "./Action/ActionCreator"
import { Formik, Form, Field, ErrorMessage } from "formik";

const schema = yup.object().shape({
        email: yup.string().email().required(""),
        password: yup.string().min(8).max(32).required(""),
        cpassword: yup.string().oneOf([yup.ref("password"),null],"conform password should match to the passsword").required()
});

function Emailverfication(props) {
        const emaildata = useSelector((res)=>{
            return res.allformdata.myemailvalidationdata
        });

        const dispatch = useDispatch();    
        const onSubmitData = (e) => {
            dispatch(storeEmailVerification(e))
        }

        useEffect(()=>{
            
            if(!Array.isArray(emaildata)){
                props.backtodepartment(10)
            }

        },[emaildata])

         return (
        
            <div className="container">
            <div>
                <img src="logo.png" />
                <h4>Welcome to Daily Doc</h4>
            </div>
            <h6>Sign Up to Daily Doc</h6>
            <div className="myform">
                <Formik initialValues={{ 
                        email: "",
                        password: "",
                        cpassword :""
                    }}
                    validationSchema={schema}
                    onSubmit={onSubmitData}>
                    <Form>

                    <label>Email Id</label>
                    <Field name="email" type="text" autoComplete ="off"/>   
                    <ErrorMessage name="email" />
                    
                    <br />
                    <br />

                    <label>Password</label>
                    <Field name="password" type="password" autoComplete ="off"/>  
                    <ErrorMessage name="password" />

                    <br />
                    <br />

                    <label>Re-enter Password</label>
                    <Field name="cpassword" type="password" autoComplete ="off"/>   
                    <ErrorMessage name="cpassword" />
                    <br />
                    <br />
                    <button type="submit">VERIFY</button>
                    </Form>
                </Formik>
            </div>
            </div>



         )
     }

export default Emailverfication
