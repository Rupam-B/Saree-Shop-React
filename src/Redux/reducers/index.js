import { combineReducers } from "redux";
import AddOrRemoveItems from "./AddOrRemoveCart";
import AuthenticationReducer from "./AuthenReducer";
import AddOrderObject from "./OrderReducer"
import dispExtdOrders from "./OrderExtendedReducer";


const rootReducer = combineReducers({
    AddOrRemoveItems:AddOrRemoveItems,
    AuthenticationReducer:AuthenticationReducer,
    AddOrderObject:AddOrderObject,
    dispExtdOrders:dispExtdOrders
})

export default rootReducer;