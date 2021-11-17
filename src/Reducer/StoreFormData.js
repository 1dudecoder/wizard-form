import { ActionTypes } from "../Action/ActionsTypes";

const InitialFormState = {
  myemailvalidationdata: [],
  myemailotpdata: [],
  myadmindetails: [],
  myuserotpdata: [],
  myhospitaldata: [],
  mydepartmentdata : [],
  mywarddata : [],
  mybeddata : []
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

    case ActionTypes.STORE_WARD_DETAILS:
      return { ...state, mywarddata: payload };

      case ActionTypes.STORE_BED_DETAILS:
        return { ...state, mybeddata: payload };

    default:
      return state;
  }

};
