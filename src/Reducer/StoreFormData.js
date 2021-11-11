import { ActionTypes } from "../Action/ActionsTypes";

const InitialFormState = {
  myformdata: [],
  myemailvalidationdata: [],
};

export const formReducer = (state = InitialFormState, { type, payload }) => {
  switch (type) {
    case ActionTypes.STORE_EMAIL_VERIFICATION:
      return { ...state.myemailvalidationdata, myemailvalidationdata: payload };

    case ActionTypes.STORE_USER_VERIFICATION:
      return { ...state, myformdata: payload };

    case ActionTypes.STORE_HOSPITAL_DETAILS:
      return { ...state, myformdata: payload };

    case ActionTypes.STORE_WARD_DETAILS:
      return { ...state, myformdata: payload };

    default:
      return state;
  }
};
