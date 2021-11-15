import { createStore , applyMiddleware , compose } from "redux";
import {rootReducer} from "../Reducer/CombinerReducer"
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store;