import { ActionTypes } from "./ActionsTypes";

export const storeEmailVerification = (data) => {
    return {
        type: ActionTypes.STORE_EMAIL_VERIFICATION,
        payload: data
    }
}

export const storeUserVerification = (data) => {
    return {
        type: ActionTypes.STORE_USER_VERIFICATION,
        payload: data
    }
}

export const storeHospitalDetails = (data) => {
    return {
        type: ActionTypes.STORE_HOSPITAL_DETAILS,
        payload: data
    }
}

export const storeWardDetails = (data) => {
    return {
        type: ActionTypes.STORE_WARD_DETAILS,
        payload: data
    }
}
