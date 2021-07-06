import { combineReducers } from "redux"  
import IndustryCategoryReducers from "./industry-category/industryCategoryReducer" 

export default combineReducers({
    industryCategory : IndustryCategoryReducers
}) 