import axiosInstance from "../helpers/apiClient";
import { ActionTypes } from "./ActionsTypes";


const headers = {
    "Content-Type":"application/json",
};


export const storeEmailVerification = (data) => {
    console.log(data)
    return (dispatch) => {
        
        axiosInstance.post('/onboarding/ob0', {user : data}, {headers: headers})
        .then(response => {
            console.log(response.data);
            let userdata = {
                otp_id : response.data.data._id
            }
            
            localStorage.setItem("userdata",JSON.stringify(userdata))
            dispatch({type: ActionTypes.STORE_EMAIL_VERIFICATION, payload : userdata })
        }).catch(error => {
            console.log(error.response);
            console.log("error found ")
        })
    };
  }


export const storeEmailOTP = (data) => {
    let localdata = JSON.parse(localStorage.getItem("userdata"))
    return (dispatch) => {
        console.log({_id : localdata.otp_id, otp : data})
        axiosInstance.post("/onboarding/ob0/verify/otp",{ _id : localdata.otp_id, otp : data}, {headers: headers})
        .then(res => {
            console.log(res.data)
            
            let userdata = {
                otp_id : localdata.otp_id,
                userEmail: res.data.data.onboardingSession.userEmail,
                sessionid: res.data.data.onboardingSession._id
            }

            localStorage.setItem("userdata", JSON.stringify(userdata))
            if(res.data.data.user.emailVerified == true){
                dispatch({type: ActionTypes.STORE_EMAIL_OTP ,payload: "user has verified successfully"})

            }
        })
        .catch(err => console.log(err.response))
    }
}


export const Storeadmindetails = (data) => {
    console.log(data)

    return (dispatch) => {

        let localdata = JSON.parse(localStorage.getItem("userdata"))

        console.log(localdata)
        const user = {
            session: localdata.sessionid,
            firstName : data.firstname, 
            lastName : data.lastname,
            email : localdata.userEmail,
            mobile : data.mobileno,
            countryCode : data.countrycode
        }
        console.log(user)
        axiosInstance.post("/onboarding/ob1",{user : user}, {headers: headers})
        .then(res => {
            console.log(res.data)
            dispatch({type:"STORE_ADMIN_DETAILS",payload: data})
            let admindetails = {
                userEmail : res.data.data.onboardingSession.userEmail, //userData.email
                userMobile : res.data.data.onboardingSession.userMobile, //userData.mobile
                userName : res.data.data.onboardingSession.userName, //userData.name
                countryCode : res.data.data.onboardingSession.countryCode, //userData.countryCode
                sessionid : res.data.data.onboardingSession._id,
                mobile_otp_id : res.data.data._id,
                mobile : data.mobileno,
                firstName : data.firstname, 
                lastName : data.lastname,
            }
            localStorage.setItem("admindetails", JSON.stringify(admindetails))
            localStorage.setItem("session_id", res.data.data.onboardingSession._id)
        })
        .catch(err => console.log(err.response))
    }
}


export const storeUserOTP = (data) => {
    console.log(data)
    let session = localStorage.getItem("session_id");
    console.log(session)
    return (dispatch) => {
        axiosInstance.post("/onboarding/ob1/verify/mobileOtp",{ otp: data.otp , _id: data._id , session }, {headers: headers})
        .then(res=>{
            console.log(res.data)
            dispatch({type:"STORE_USER_OTP", payload: res.data.message})
            localStorage.setItem("token",res.data.data.token)
        }).catch(err => {
            console.log(err.response)
        })
    }
}


export const storeHospitalDetails = (data) => {
    console.log(data)

    const userdata = JSON.parse(localStorage.getItem("userdata"));

    let hospitaldetails  = {
        name: data.hospitalname,
        rawAddress: data.city +" "+ data.state +" "+ data.country ,
        country: data.country,
        state: data.state,
        city: data.city,
        session: userdata.sessionid,
    }

    return (dispatch) => {
        axiosInstance.post("/onboarding/ob2", {hospital : hospitaldetails}, {headers: headers})
        .then(res=>{
            console.log(res.data)
            console.log(res.data.data.savedHospital._id + res.data.data.onboardingSession._id )
            localStorage.setItem("hospital_id", res.data.data.savedHospital._id)
            localStorage.setItem("session_id", res.data.data.onboardingSession._id)
            dispatch({type:"STORE_HOSPITAL_DETAILS", payload: hospitaldetails})
        }).catch(err => {
            console.log(err.response)
        })
    }
}


export const getDepartmentDetails = () => {
    let mytoken = localStorage.getItem("token")
    console.log(mytoken)
    const headers = {
        "x-access-token": mytoken,
        "Content-Type": "application/json",
      };

      return (dispatch) => {
        axiosInstance.get("/templates/departments", {headers : headers})
        .then((res) => {
            console.log(res)
            dispatch({type:"GET_DEPARTMENT_DETAILS", payload : res.data.data})
        }).catch(err => {
            console.log(err)
        })
      }
}



export const storeDepartmentDetails = (data) => {
    const deparments = data.map(sweetItem => {
        return sweetItem._id
    })
        
    console.log(deparments)
    let session = localStorage.getItem("session_id")
    let hospital = localStorage.getItem("hospital_id")

    return (dispatch) => {
        axiosInstance.post("/onboarding/ob3", {hospital, session, departments : deparments}, {headers: headers})
        .then(res=>{
            console.log(res.data)
            dispatch({type:"STORE_DEPARTMENT_DETAILS", payload: res.data.message})
            //here you can also store the data which will store the selected department
        }).catch(err => {
            console.log(err.response)
        })
    }
}


export const getWardsDetails = () => {
    let mytoken = localStorage.getItem("token")
    const headers = {
        "x-access-token": mytoken,
        "Content-Type": "application/json",
      };
      return (dispatch) => {
        axiosInstance.get("/templates/wards", {headers : headers})
        .then((res) => {
            console.log(res.data.data)
            dispatch({type:"GET_WARDS_DETAILS", payload : res.data.data})
        }).catch(err => {
            console.log(err.response)
        })
      }
}


export const addNewWard = (data) => {
    console.log(data);
    let shortname  = data.slice(0, 4)
    let mytoken = localStorage.getItem("token")
    const headers = {
        "x-access-token": mytoken,
        "Content-Type": "application/json",
      };

    return (dispatch)=>{
        axiosInstance.post("templates/ward",{ward: {name: data, shortName: shortname}}, {headers : headers})
        .then(res => {
            console.log("helloWbro")
            console.log(res.data)
            dispatch({type:"ADD_WARDS", payload: res.data.data})
        }).catch(err =>{
            console.log(err.response)
        })
    }
}


export const storeWardDetails = (data) => {
    console.log(data)
    let session = localStorage.getItem("session_id")
    let hospital = localStorage.getItem("hospital_id")
    return (dispatch)=>{
        axiosInstance.post("onboarding/ob4",{hospital: hospital , session: session , wards: data} )
        .then(res => {
            console.log(res.data)
            dispatch({type:"STORE_WARDS_DETAILS",payload: res.data.message})
        }).catch(err=>{
            console.log(err.response)
        })
    }
}


export const deleteward = (id) => {
    console.log(id);
    let mytoken = localStorage.getItem("token")
    const headers = {
        "x-access-token": mytoken,
        "Content-Type": "application/json",
      };

    return (dispatch)=>{
        axiosInstance.delete(`/templates/wards/${id}`, {headers: headers})
        .then((res)=>{
            console.log(res)
            dispatch({type:"DELETE_WARDS", payload: res.data.data._id})
        }).catch(err=>{
            console.log(err)
        })
    }
}


// export const storeBedDetails = (data) => {
//     return {
//         type: ActionTypes.STORE_BED_DETAILS,
//         payload: data
//     }
// }
