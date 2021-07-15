// import { 
//         ADD_DATA, 
//         SET_IS_SUBMITTING,
//         SET_IS_LOADING, 
//         SET_IS_APICALLFORADDFINISHED,
//         SET_IS_APICALLFORUPDATEFINISHED,
//         SET_IS_ADDDEFAULTDIALOG,
//         ADDED_ITEM
//     } from './../../actions/industry-category/types' 


// const initialState = {  
//     name : '', 
//     isSubmitting : false, 
//     isLoading : false,
//     validForm : false,
//     apiCallForAddFinished : false,
//     apiCallForUpdateFinished : false,
//     isAddDefaultDialog : true,
//     addedItem : { name : '' } 
// }

// function Reducers(state = initialState, action) {
//     console.log('action here at industry category reducers >> ', action)

//     //action will have type and payload, using switch cases, change state with given payload 
//     switch (action.type) {
//         case ADD_DATA:            
//             return {
//                 ...state,
//                 name : action.payload 
//             }

//         case SET_IS_SUBMITTING:
//             return {
//                 ...state,
//                 isSubmitting : action.payload
//             } 

//         case SET_IS_LOADING:
//             return {
//                 ...state,
//                 isLoading : action.payload 
//             }

//         case SET_IS_APICALLFORADDFINISHED:
//             return {
//                 ...state,
//                 apiCallForAddFinished : action.payload 
//             }

//         case SET_IS_APICALLFORUPDATEFINISHED:
//             return {
//                 ...state,
//                 apiCallForUpdateFinished : action.payload
//             }

//         case SET_IS_ADDDEFAULTDIALOG:
//             return {
//                 ...state,
//                 isAddDefaultDialog : action.payload 
//             }

//         case ADDED_ITEM:
//             return { 
//                 ...state,
//                 addedItem : action.payload
//             }
    
//         default:
//             return state
//     } 
// }

// const IndustryCategoryReducers = Reducers
// export default IndustryCategoryReducers 