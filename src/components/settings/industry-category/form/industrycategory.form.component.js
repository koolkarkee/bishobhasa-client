// import React, { Component }  from 'react'
// import { Button, FormGroup, FormControl, TextField } from '@material-ui/core' 
// import AddIcon from '@material-ui/icons/Add'
// import UpdateIcon from '@material-ui/icons/Update'

// import notify from '../../../../utils/notify'
// import { httpClient } from '../../../../utils/httpClient'

// import { connect } from 'react-redux';
// import { 
//     addIndustryCategory, submitting, addFinished, addedItem 
// } from './../../../../actions/industry-category/industryCategoryActions' 

// const defaultForm = { 
//     name : '' 
// }

// //const InsertUrl = 'template/industryCategory/insert' 
// const EditUrl = (id) => {
//     return `template/industryCategory/${id}`
// }

// class IndustryCategoryForm extends Component {
//     constructor(props) {
//         super(props) 
//         this.state = {
//             data : {
//                 ...defaultForm
//             },
//             err : {
//                 ...defaultForm
//             },
//             //isSubmitting : false, 
//             //isLoading : false,
//             validForm : false,
//             //apiCallForAddFinished : false,
//             apiCallForUpdateFinished : false,
//             isAddDefaultDialog : true 
//         }
//     }

//     componentDidMount(){ 
//         console.log('check props >> ', this.props) 

//         this.setState({
//             isAddDefaultDialog : this.props.isAddDefaultDialog 
//         })

//         //checking props for edits
//         if(this.props.editValues){
//             this.setState({
//                 data : this.props.editValues 
//             }, () => {
//                 console.log('async data >> ', this.state.data) 
//             }) 
//         } 

//         console.log('editValues from did mount >> ', this.state.editValues)
//         console.log('data after  did mount >> ', this.state.data)
//     }

//     isFormValidated(){
//         let errors = Object
//                         .values(this.state.err)
//                         .filter(x => x) 
//         console.log('errors filtered >> ', errors);

//         this.setState({
//             isValidForm : errors.length === 0  
//         })
//     }

//     validateForm(fieldName){ 
//         let name = this.state.data.name
//         let errMsg = name 
//                         ? name.length < 31
//                             ? '' 
//                             : '* must not exceed 30 characters'
//                         : '* required field'

//         this.setState((pre) => ({
//             err : {
//                 ...pre.err,
//                 [fieldName] : errMsg
//             }
//         }), () => {
//             this.isFormValidated()
//         })
//     }

//     handleChange = e => {
//         const { name, value } = e.target
//         this.setState((pre) => ({
//             data : {
//                 ...pre.data,
//                 [name] : value
//             }
//         }), () => {
//             //validate form
//             this.validateForm(name)
//         })
//     } 

//     closeDialogForAdd = (addFinished, addedItem) => {
//         //close the dialog of parent 
        
//         console.log('added item and closing dialog >> ', addedItem)   
//         this.props.OnSuccessfulAddItem(addFinished, addedItem)            
//     }

//     closeDialogForUpdate = (updatedItem) => {
//         //close the dialog of parent
//         this.setState({
//            apiCallForUpdateFinished : true, 
//            //isAddDefaultDialog : true,
//            data : { ...defaultForm }
//         }) 
       
//         console.log('data after update >> ', this.state.data)
//         this.props.OnSuccessfulUpdateItem(this.state.apiCallForUpdateFinished, updatedItem)
//    }

//     // callApiForAdd(name){
//     //     httpClient
//     //         .post(InsertUrl, name, {}, true) 
//     //         .then(data => {
//     //             console.log('inserted data >> ', data); 
//     //             notify.showSuccess('Records added successfully')                
//     //             this.closeDialogForAdd(data) 
//     //         })
//     //         .catch(err => {
//     //             console.log('err from insert >> ', err);                 
//     //             notify.handleError(err)   
//     //             this.setState({
//     //                 isSubmitting : false 
//     //             }) 
//     //         }) 
//     // }

//     componentDidUpdate(previous){
//         console.log('prev at did update >> ', previous) 
//         // const { _id } = this.props.addedItem
//         // console.log('id of inserted item at did update >> ', _id)
//         // if(_id != null){ 
//         //     let item = this.props.addedItem
//         //     console.log('added item after dispatch >> ', item) 
//         //     //this.closeDialogForAdd(item)  
//         // } 
//     }

//     callApiForUpdate(){
//         httpClient
//         .update(EditUrl(this.state.data._id), this.state.data, {}, true)
//         .then(data => {
//             console.log('updated data >> ', data); 
//             notify.showSuccess('Records updated successfully')                
//             this.closeDialogForUpdate(data)
//         })
//         .catch(err => {
//             console.log('err from update >> ', err);                 
//             notify.handleError(err)   
//             this.setState({ 
//                 isSubmitting : false 
//             }) 
//         }) 
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()         
//         console.log('this.state now >> ', this.state) 

//         //http call now
//         if(this.state.isValidForm){
//             console.log('proceed further >> ')              
//             console.log('api calling started ... ')
  
//             if(this.props.isAddDefaultDialog){ //api call for add     
//                 const add = this.props.addIndustryCategory({ ...this.state.data })  
                 
//                 console.log('api call for add finished >> ', this.props.addFinished) 
//                 console.log('added item after dispatch 1 >> ', this.props.addedItem) 

//                 if(this.props.addFinished){ 
//                     console.log('added item after dispatch >> ', this.props.addedItem) 
//                     this.closeDialogForAdd(this.props.addFinished, this.props.addedItem) 
//                 } 
//             } else{
//                 this.callApiForUpdate() 
//             }  
//         } 
//     }

//     render() {   
        
//         let btn = this.props.isSubmitting 
//         ?<Button variant="contained" color="primary" disabled={true}>Submitting ...</Button>                                                 
//         : <Button variant="contained" color="primary" size="large" 
//                 disabled={this.state.isValidForm ? false : true} 
//                 type="submit" 
//                 startIcon={
//                     this.state.isAddDefaultDialog
//                     ? <AddIcon />
//                     : <UpdateIcon /> 
//                 }
//            >
//              { this.state.isAddDefaultDialog ? "Add" : "Update" }
//          </Button>
                            
//         return (
//             <> 
//                 <form className="form-group" onSubmit={this.handleSubmit}>
//                     <FormGroup>
//                     <FormControl>  
//                         <div> 
//                             <span>
//                                 <p>Name : </p>
//                             </span>
//                             <span> 
//                                 <TextField 
//                                     required 
//                                     id="standard-basic"   
//                                     margin="dense"
//                                     name="name"
//                                     onChange = { this.handleChange } 
//                                     value = { this.state.data.name || '' }
//                                     autoFocus 
//                                     />
                                
//                                 <p className="validationError">{this.state.err.name}</p>  
//                             </span>   
//                         </div>   
//                         </FormControl>                      
//                         <br/>
//                     </FormGroup> 
//                     <span>
//                         <span style={{ marginRight : 90 }}>{btn}</span> 
//                         <span > { this.props.isSubmitting ? '' : this.props.closeButton }  </span>
//                     </span> 
//                 </form>
//             </>
//         ) 
//     }
// }

// //map state to props, incoming data for component
// const mapStateToProps = (state) => ({  
//     isSubmitting : state.industryCategory.isSubmitting,
//     addFinished : state.industryCategory.apiCallForAddFinished, 
//     addedItem : state.industryCategory.addedItem
// }) 

// //map dispatch to props, outgoing events/actions from component 
// const mapDispatchToProps = (dispatch) => ({ 
//     addIndustryCategory : (data) => { 
//         dispatch(addIndustryCategory(data))  
//     },
//     submitting : (value) => { dispatch(submitting(value)) }  
// })

// const IndustryCategoryFormComponent = connect(mapStateToProps, mapDispatchToProps)(IndustryCategoryForm) 
// export default IndustryCategoryFormComponent 
