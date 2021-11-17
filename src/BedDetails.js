import { Formik, Form, Field } from "formik";
import React from 'react'
import {useDispatch} from "react-redux"
import { storeBedDetails } from './Action/ActionCreator';

function BedDetails(props) {

    const dispatch = useDispatch();
    const onSubmitData = (data) => {
        console.log(data);
        dispatch(storeBedDetails(data))
      };
    
    return (

        <Formik initialValues={{
            beds: ""
        }}
        onSubmit={onSubmitData}
        >
            <Form>
                <div>logo</div>
                <div>
                <h5>Please select each ward/floor and add room and beds available on selected 
                    ward/floor. If no rooms available enter bed names directly.</h5>    
                </div>

                <div>
                    <button type="button">ADD Room</button>
                    <button type="button">Bed Number</button>
                </div>

                    <Field name="beds" value="icu" type="radio" id="" /><label>ICU</label>
                    <Field name="beds" value="genral ward" type="radio" id="" /><label>GENRAL WARD</label>
                    <Field name="beds" value="special ward" type="radio" id="" /><label>SPECIAL WARD</label>
                    <Field name="beds" value="ccu" type="radio" id="" /><label>CCU</label>
                    <Field name="beds" value="sicu" type="radio" id="" /><label>SICU</label>

                <div>

                <div>
                <button type="button" onClick={()=>{
                    props.backtodepartment(4)
                }}>BACK</button>
                <button type="button">SKIP</button>
                <button type="submit">NEXT</button>
                </div>
                
            </div>

            </Form>
        </Formik>

    )
}

export default BedDetails
