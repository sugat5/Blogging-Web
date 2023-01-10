import { combineReducers } from "redux";
import { SignupReducer } from "./signup/signup-reducer";
import { SigninReducer } from "./signin/signin-reducer";


export const rootReducer=combineReducers({signup:SignupReducer,signin:SigninReducer});