import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewWard,
  deleteward,
  getWardsDetails,
  storeWardDetails,
} from "./Action/ActionCreator";
import { Formik, Form, Field } from "formik";

function WardDetails(props) {
  const dispatch = useDispatch();

  const [inputvalue, setInputValue] = useState("");
  const [selectedWard, setSelectedWard] = useState([]);

  const storedwardsdata = useSelector((state) => {
    return state.allformdata.getwardsdata;
  });
  const storednewwardsdata = useSelector((state) => {
    return state.allformdata.addwards;
  });
  const storeddeletewardsdata = useSelector((state) => {
    return state.allformdata.deletewards;
  });

  const myarrids = [];
  // myarrids.push(storednewwardsdata);

  const onSubmitData = (event) => {
    console.log(event);
    let myids = Object.values(event);
    for (let i = 1; i < myids.length; i++) {
      myarrids[i - 1] = myids[i];
    }
    console.log(myarrids);

    dispatch(storeWardDetails(myarrids));
    // props.backtodepartment(5)
    //go to next page now
  };

  function AddWards() {
    dispatch(addNewWard(inputvalue));
  }

  function Deletewards(data) {
    dispatch(deleteward(data));
  }

  const findSelect = (e) => {
    if (!selectedWard.includes(e.target.value)) {
        e.target.checked = true
        setSelectedWard([...selectedWard, e.target.value]);
        
    } else {
        e.target.checked = false;
        setSelectedWard(selectedWard.filter((item)=>{
            return item != e.target.value  //here is problem
        });
    }
    console.log(selectedWard)
  };

  useEffect(() => {
    dispatch(getWardsDetails());
  }, [storednewwardsdata, storeddeletewardsdata, selectedWard]);

  return (
    <>
      <Formik
        initialValues={{
          wardsinput: "",
        }}
        onSubmit={onSubmitData}
      >
        <Form>
          <div>logo</div>
          <div>
            <h5>Please Add All Wards Available in your Hospital</h5>
            <label>Ward/Floor Name</label>
            
            <Field
              name="wardsinput"
              value={inputvalue}
              onChange={(e) => {
                console.log(e.target.value);
                setInputValue(e.target.value);
                if (e.key === "Enter") {
                  console.log("enter press here! ");
                }
              }}
              type="text"
            />

            
            <button
              type="button"
              onClick={(e) => {
                let value = inputvalue.trim();
                if (value != "") {
                  console.log("enter kro bhai");
                  AddWards();
                  setInputValue("");
                }
              }}
            >
              ADD
            </button>
          </div>

          <div>
            {storedwardsdata.map((item , index) => {
              return (
                <>


                  <Field
                    onClick={(e)=>{findSelect(e)}}
                    type="radio"
                    key = {index}
                    value={item._id}
                    name={item.name}
                    id = {item._id}
                    checked = {
                        selectedWard.includes(item._id) ? true : false
                    }
                  />
                  {item.name}


                  <button
                    type="button"
                    onClick={(e) => {
                      Deletewards(item._id);
                    }}
                  >
                    x
                  </button>
                  <br />
                </>
              );
            })}
          </div>

          <div>
            <button
              type="button"
              onClick={() => {
                props.backtodepartment(3);
              }}
            >
              BACK
            </button>
            <button type="button">SKIP</button>
            <button type="submit">NEXT</button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default WardDetails;
