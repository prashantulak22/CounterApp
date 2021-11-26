import counterNumber from "./Reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ counterNumber });

export default rootReducer;