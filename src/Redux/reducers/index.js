import { combineReducers } from "redux";
import AddOrRemoveItems from "./AddOrRemoveCart";
import AuthenticationReducer from "./AuthenReducer";


const rootReducer = combineReducers({
    AddOrRemoveItems:AddOrRemoveItems,
    AuthenticationReducer:AuthenticationReducer
})

export default rootReducer;