import React,{useEffect} from 'react'
import { Formik, Form, Field , ErrorMessage } from "formik";
import * as yup from "yup"
import { useDispatch, useSelector} from "react-redux"
import { Storeadmindetails } from './Action/ActionCreator';


const schema = yup.object().shape({
    firstname: yup.string().required("please enter your first name"),
    lastname: yup.string().required("please enter your last name"),
    mobileno: yup.string().required("please enter you mobile number"),
    countrycode: yup.string().required("please enter country code")
});

function AdminDetails(props) {

    const dispatch = useDispatch();
    const admindata = useSelector(state => {
        return state.allformdata.myadmindetails
    });
    
    const onSubmitData = (data) => {
        console.log(data)
        dispatch(Storeadmindetails(data))
    }

    useEffect(() => {

        if(!Array.isArray(admindata)){
            props.backtodepartment(11)
        }

    }, [admindata])

    
    return (
        <div>
        <Formik initialValues={{
            firstname: "",
            lastname: "",
            mobileno: "",
            countrycode: "",
        }} 
        validationSchema={schema}
        onSubmit={onSubmitData}>
            <Form>
                <div>logo</div>
                <h5>Enter Hospital Admin Details</h5>
                <label>First Name</label>
                <Field type="text" name="firstname" />
                <ErrorMessage name="firstname"/> 
                <br />
                <label>Last Name</label>
                <Field type="text" name="lastname" />
                <ErrorMessage name="lastname"/> 

                <div>
                <Field name="countrycode" as="select">
                    <option value="91">+91</option>
                    <option value="81">+81</option>
                    <option value="49">+49</option>
                </Field>
                <ErrorMessage name="countrycode"/> 

                <label>Mobile No.</label>
                <Field type="number" name="mobileno" />
                <ErrorMessage name="mobileno"/> 

                </div>

                <button type="submit" >Get OTP</button>

            </Form>
        </Formik>
        </div>
    )
}

export default AdminDetails
