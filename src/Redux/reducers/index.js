import { combineReducers } from "redux";
import AddOrRemoveItems from "./AddOrRemoveCart";
import AuthenticationReducer from "./AuthenReducer";
import AddOrderObject from "./OrderReducer"


const rootReducer = combineReducers({
    AddOrRemoveItems:AddOrRemoveItems,
    AuthenticationReducer:AuthenticationReducer,
    AddOrderObject:AddOrderObject
})

export default rootReducer;