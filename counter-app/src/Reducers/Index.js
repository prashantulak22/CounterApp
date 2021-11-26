import counterNumber from "./Reducer";
import {combineReducers} from 'react-redux'

const rootReducer = combineReducers({ counterNumber});

export default rootReducer;