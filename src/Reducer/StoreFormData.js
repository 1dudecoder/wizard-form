import { ActionTypes } from "../Action/ActionsTypes";

const InitialFormState = {
  myemailvalidationdata: [],
  myemailotpdata: [],
  myadmindetails: [],
  myuserotpdata: [],
  myhospitaldata: [],
  mydepartmentdata : [],
  getdepartmentdata : [],
  getwardsdata : [],
  addwards : [] ,
  deletewards : "",
  mywarddata : [],
  mybeddata : [],
};

export const formReducer = (state = InitialFormState, { type, payload }) => {
  
  switch (type) {
    case ActionTypes.STORE_EMAIL_VERIFICATION:
      return { ...state, myemailvalidationdata: payload };

    case ActionTypes.STORE_EMAIL_OTP:
      return {...state, myemailotpdata : payload }

    case ActionTypes.STORE_USER_OTP:
      return { ...state, myuserotpdata: payload };

    case ActionTypes.STORE_ADMIN_DETAILS:
      return { ...state, myadmindetails: payload };

    case ActionTypes.STORE_HOSPITAL_DETAILS:
      return { ...state, myhospitaldata: payload };

    case ActionTypes.STORE_DEPARTMENT_DETAILS:
      return { ...state, mydepartmentdata: payload };

    case ActionTypes.GET_DEPARTMENT_DETAILS:
      return { ...state, getdepartmentdata: payload };

    case ActionTypes.GET_WARDS_DETAILS:
      return { ...state, getwardsdata: payload };

    case ActionTypes.ADD_WARDS:
      return { ...state, addwards: payload };

    case ActionTypes.DELETE_WARDS:
      return { ...state, deletewards: payload };
      
    case ActionTypes.STORE_WARDS_DETAILS:
      return { ...state, mywarddata: payload };

      case ActionTypes.STORE_BED_DETAILS:
        return { ...state, mybeddata: payload };

    default:
      return state;
  }

};
