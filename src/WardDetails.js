import React, { useEffect,useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addNewWard, getWardsDetails , storeWardDetails } from './Action/ActionCreator';
import { Formik, Form, Field } from "formik";


function WardDetails(props) {
    const dispatch = useDispatch();
    const [inputvalue, setInputValue] = useState("")
    // const [checkbutton, setcheckbutton] = useState(false)
    const storedwardsdata = useSelector(state => {
        return state.allformdata.getwardsdata
    });
    const storednewwardsdata = useSelector(state => {
        return state.allformdata.addwards
    });
    
    const myarrids = []
    // myarrids.push(storednewwardsdata);

    const onSubmitData = (event) => {
        console.log(event)
        let myids = Object.values(event);
        for(let i = 1 ; i < myids.length ;i++){
            myarrids[i-1] = myids[i];
        }
        console.log(myarrids)

        dispatch(storeWardDetails(myarrids))
        // props.backtodepartment(5)
        //go to next page now
    };

    function AddWards(){
        dispatch(addNewWard(inputvalue))
    }

    useEffect(()=>{
        dispatch(getWardsDetails());
    },[storednewwardsdata])


    return (
        <>
        <Formik initialValues={{
            wardsinput : ""

        }}
        onSubmit={onSubmitData}
        >
            <Form>
                <div>logo</div>
                <div>
                <h5>Please Add All Wards Available in your Hospital</h5>
                <label>Ward/Floor Name</label>
                    <Field name="wardsinput" value={inputvalue} onChange={(e)=>{
                        console.log(e.target.value)
                        setInputValue(e.target.value)
                        if(e.key === 'Enter'){
                            console.log('enter press here! ')
                        }
                    }} type="text" /><button type="button" onClick={(e)=>{
                        let value = inputvalue.trim();
                        if(value != ""){
                            console.log("enter kro bhai")
                            AddWards()
                        }
                    }}>ADD</button>

                </div>

                <div>
                    {
                        storedwardsdata.map((item)=>{
                            return (
                                <>
                                    <Field type="radio" value={item._id} name={item.name} /> {item.name} 
                                    {/* <button type="button" >X</button> */}
                                     <br />
                                </>
                            )
                        })
                    }
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
                </>
    )
}

export default WardDetails
