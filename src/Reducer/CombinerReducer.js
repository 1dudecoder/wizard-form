import {combineReducers} from "redux"
import { formReducer } from "./StoreFormData"

export const rootReducer = combineReducers({
    allformdata: formReducer,
})