import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { storeUserOTP } from './Action/ActionCreator';
import { Formik, Form, Field } from "formik";


function UserVerification(props) {
    const dispatch = useDispatch();
    const userotpdata = useSelector(state => {
        return state.allformdata.myuserotpdata
    })
    const onSubmitData = (data) => {
        console.log(data)
        let myobject = Object.values(data);
        let otp = ""
        for(let i = 1; i < myobject.length; i++){
            otp += myobject[i];
        }
        // let phonenumber = myobject[0]

        const admindata = JSON.parse(localStorage.getItem("admindetails"));
        const _id = admindata.mobile_otp_id

        dispatch(storeUserOTP({otp , _id}))
    }


    useEffect(() => {
        if(!Array.isArray(userotpdata)){
            props.backtodepartment(2)
        }
    }, [userotpdata])



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
