import React,{useEffect, useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { getDepartmentDetails, storeDepartmentDetails } from './Action/ActionCreator';
import MutliDropDown from './MutliDropDown';


function DepartmentDetails(props) {
    const dispatch = useDispatch();
    const [showerror, setshowerror] = useState(true)
    const storeddepartmentdata = useSelector(state => {
      return state.allformdata.getdepartmentdata
  });

  const statusofdepartment = useSelector(state => {
    return state.allformdata.mydepartmentdata
});

    const deparmentdata = []

    const onSubmitData = () => {
        console.log(deparmentdata.length)
        if(deparmentdata.length != 0){
            console.log(deparmentdata);
            dispatch(storeDepartmentDetails(deparmentdata[0]))
        }
      };

      function adddropdowndata(values){
        setshowerror(false)
        if(deparmentdata.length != 0){
            setshowerror(false)
        }
        console.log(values)
        deparmentdata.push(values)
      }

      function removedropdowndata(values){
          if(deparmentdata.length == 0){
              setshowerror(true)
          }
          console.log(values)
          deparmentdata.pop(values)      }


      useEffect(() => {

        dispatch(getDepartmentDetails())
        if(!Array.isArray(statusofdepartment)){
          props.backtodepartment(4)
        }

      }, [statusofdepartment])


    return (
            <>
                <div>logo</div>
                <div>
                <h5>Please Choose All Available Departments in your Hospital</h5>
                <label>Department Name</label>
                <MutliDropDown removedropdowndata = {removedropdowndata} adddropdownvalues={adddropdowndata} options={storeddepartmentdata}  />
                {showerror==true ? <p>please add the deparments data</p> : ""}
                </div>
                <div>
                    <button type="button" onClick={()=>{
                         props.backtodepartment(2)
                    }}>BACK</button>
                    <button type="button">SKIP</button>
                    <button onClick={()=>{
                        onSubmitData()
                    }}>NEXT</button>
                </div>
            </>
    )
}

export default DepartmentDetails
