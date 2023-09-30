import { combineReducers } from "redux";
import AddOrRemoveItems from "./AddOrRemoveCart";


const rootReducer = combineReducers({
    AddOrRemoveItems:AddOrRemoveItems
})

export default rootReducer;