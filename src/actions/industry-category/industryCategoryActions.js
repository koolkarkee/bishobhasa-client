// import { ADD_DATA, SET_IS_SUBMITTING, SET_IS_LOADING,SET_IS_APICALLFORADDFINISHED, ADDED_ITEM } from './types'

// import { httpClient } from '../../utils/httpClient'
// import notify from '../../utils/notify'
// const InsertUrl = 'template/industryCategory/insert' 

// //api call for adding item 
// export const addIndustryCategory = (data) => (dispatch) => {   
//     //call back end and we receive data
//     console.log('add industry category at actions >>', data)     
//     dispatch(submitting(true))    
     
//     httpClient
//         .post(InsertUrl, data, {}, true)
//         .then(insertedData => {                     
//             notify.showSuccess('Records added successfully')      
//             console.log('inserted data at ic actions >> ', insertedData)   

//             dispatch(addedItem(insertedData))  
//             console.log('inserted item is dispatched >> ')             
//         })  
//         .catch(err => { 
//             console.log('err from insert >> ', err);                 
//             notify.handleError(err)  
//         })  
//         .finally(() => {  
//             dispatch(submitting(false))
//             dispatch(addFinished(true)) 
//         })
// }

// export const add = (data) => ({
//     type : ADD_DATA,
//     payload : data  
// })

// export const submitting = (isSubmitting)  => ({
//     type : SET_IS_SUBMITTING,
//     payload : isSubmitting 
// }) 

// export const addFinished = (isApiCallForAddFinished) => ({
//     type : SET_IS_APICALLFORADDFINISHED,
//     payload : isApiCallForAddFinished 
// })

// export const addedItem = (insertedItem) => ({
//     type : ADDED_ITEM,
//     payload : insertedItem
// })



