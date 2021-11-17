import axiosInstance from "../helpers/apiClient";
import { ActionTypes } from "./ActionsTypes";

// rohitnegi@gmail.com 

const headers = {
    "Content-Type":"application/json",
};


export const storeEmailVerification = (data) => {
    console.log(data)
    return (dispatch) => {
        
        axiosInstance.post('/onboarding/ob0', {user : data}, {headers: headers})
        .then(response => {
            console.log(response.data);
            console.log(typeof(response.data));
            let userdata = {
                sessionid: response.data.data.onboardingSession._id,
                userEmail : response.data.data.onboardingSession.userEmail,
                otp_id : response.data.data._id
            }
            
            localStorage.setItem("userdata",JSON.stringify(userdata))
            dispatch({type: ActionTypes.STORE_EMAIL_VERIFICATION, payload : userdata })
        }).catch(error => {
            console.log(error.response);
            console.log("error found ")
            //write some code if user already exist in database
        })
    };
  }

// export const storeEmailOTP = (data) => {
//     return {
//         type: ActionTypes.STORE_EMAIL_OTP,
//         payload: data
//     }
// }

export const storeEmailOTP = (data) => {
    let localdata = JSON.parse(localStorage.getItem("userdata"))
    return (dispatch) => {
        console.log({_id : localdata.otp_id, otp : data})
        axiosInstance.post("/onboarding/ob0/verify/otp",{ _id : localdata.otp_id, otp : data}, {headers: headers})
        .then(res => {
            if(res.data.data.user.emailVerified == true){
                dispatch({type: ActionTypes.STORE_EMAIL_OTP ,payload: "user has verified successfully"})

            }
        })
        .catch(err => console.log(err.response))
    }
}

// export const Storeadmindetails = (data)=>{
//     return {
//         type:ActionTypes.STORE_ADMIN_DETAILS,
//         payload: data
//     }
// }

// STORE_ADMIN_DETAILS : "STORE_ADMIN_DETAILS"
export const Storeadmindetails = (data) => {
    let localdata = JSON.parse(localStorage.getItem("userdata"))
    const user = {
        session: localdata.sessionid,
        name : data.firstname + data.lastname,
        email : localdata.userEmail,
        mobile : data.mobileno,
        countryCode : data.countrycode
    }
    return (dispatch) => {
        axiosInstance.post("/onboarding/ob1",{user : user}, {headers: headers})
        .then(res => {
            console.log(res.data)
            dispatch({type:"STORE_ADMIN_DETAILS",payload: data})
            let admindetails = {
                userEmail : res.data.data.onboardingSession.userEmail,
                userMobile : res.data.data.onboardingSession.userMobile,
                userName : res.data.data.onboardingSession.userName,
                countryCode : res.data.data.onboardingSession.countryCode,
                userId : res.data.data.onboardingSession.user,
                mobile_otp_id : res.data.data._id,
                token : res.data.data.token
            }
            localStorage.setItem("admindetails", JSON.stringify(admindetails))
            localStorage.setItem("token", res.data.data.token)
        })
        .catch(err => console.log(err.response))
    }
}


// export const storeUserVerification = (data) => {
//     console.log(data)
//     return {
//         type: ActionTypes.STORE_USER_VERIFICATION,
//         payload: data
//     }
// }

// export const storeUserOTP = (data) => {
//     console.log(data)
//     return {
//         type: ActionTypes.STORE_USER_OTP,
//         payload: data
//     }
// }

    export const storeUserOTP = (data) => {
        console.log(data)
        return (dispatch) => {
            axiosInstance.post("/onboarding/ob1/verify/mobileOtp",{ otp: data.otp , _id: data._id }, {headers: headers})
            .then(res=>{
                console.log(res.data)
                dispatch({type:"STORE_USER_OTP", payload: res.data.message})
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
                dispatch({type:"STORE_HOSPITAL_DETAILS", payload: hospitaldetails})
            }).catch(err => {
                console.log(err.response)
            })
        }
    }

// export const storeHospitalDetails = (data) => {
//     return {
//         type: ActionTypes.STORE_HOSPITAL_DETAILS,
//         payload: data
//     }
// }

export const storeDepartmentDetails = (data) => {
    return {
        type: ActionTypes.STORE_DEPARTMENT_DETAILS,
        payload: data
    }
}

export const storeWardDetails = (data) => {
    return {
        type: ActionTypes.STORE_WARD_DETAILS,
        payload: data
    }
}

export const storeBedDetails = (data) => {
    return {
        type: ActionTypes.STORE_BED_DETAILS,
        payload: data
    }
}
