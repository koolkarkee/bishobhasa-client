// import React, { Component } from 'react'
// import IndustryCategoryFormComponent from './form/industrycategory.form.component'
// import AddCircleIcon from '@material-ui/icons/AddCircle'
// import CancelIcon from '@material-ui/icons/Cancel'
// import Edit from '@material-ui/icons/Edit'
// import DeleteIcon from '@material-ui/icons/Delete'
// import RefreshIcon from '@material-ui/icons/Refresh'
// import SearchIcon from '@material-ui/icons/Search'
 
// import CircularProgress from '@material-ui/core/CircularProgress'

// import { IconButton, Button, Dialog, DialogTitle, DialogContent, TextField, InputAdornment } from '@material-ui/core'

// import MaterialTable from 'material-table'

// import SpinnerComponent from '../../common/spinner/spinner.component'
// import ConfirmationDialogComponent from './../../common/confirmation-dialog/confirmation.dialog.component'
// import MyPagination from '../../common/pagination/pagination.component'

// import notify from '../../../utils/notify'
// import { httpClient } from '../../../utils/httpClient'

// import './../industry-category/industrycategory.component.css'
// import { TransitionLeft } from '../../common/transition/transition.const'
// import datetime from '../../../utils/datetime'
// import DatePickerComponent from '../../common/datepicker/datepicker.component'

// const  headerStyle = {
//     backgroundColor: '#EEE',
// }	

// //for generalized call 
// const FetchDataUrl = (pageSize, pageNumber) => {
//     return `template/industryCategory/getAll?pageSize=${pageSize}&pageNumber=${pageNumber}`  
// } 

// //for searching
// const FetchDataUrlForSearch = (pageSize, pageNumber, searchText) => {
//     let url = `template/industryCategory/search?name=${searchText}&pageSize=${pageSize}&pageNumber=${pageNumber}` 
//     console.log('search url >> ', url)

//     return url
// } 

// const DeleteUrl = (id) => {
//     return `template/industryCategory/${id}`
// } 

// const defaultSearchForm = { 
//     name : '' 
// }

// export default class IndustryCategoryComponent extends Component {
//     _isMounted = false 

//     constructor(){
//         super()

//         this.state = {
//             isDialogOpen : false, //open the dialog
//             isDeleteConfirmationOpen : false, //open the confirmation dialog for delete
//             deleteConfirmed : false, //delete is confirmed from confirmation dialog for delete
//             submitted : false, //form is submitted
//             isLoading : false, //data fetching from backend for table
//             isRowDeleting : false,  //row is deleting
//             columns : [ 
//                 { title: "Id", field: "_id" },
//                 { title: "Name", field: "name" },
//                 { title: "Date Created", field: "createdAt" }, 
//                 { title: "Date Updated", field: "updatedAt" } 
//             ],
//             data : [],
//             deletingRow : null, //row being deleted
//             editValues : null, //editing values to proceed to update
//             isAddDefaultDialog : true, //filter dialog for add or edit operation
//             selectedRow : null, ///selected row from the table,
//             totalRecords : 0, //total number of records from the table to show for pagination,
//             pageNumber : 1, //current page number
//             pageSize : 20, //total number of records per page
//             totalPages : 1, //the total number of pages 
//             startDate : new Date(),
//             endDate : new Date(), 
//             searchData :  {
//                 ...defaultSearchForm
//             },
//             isDateSearching : false,  //enable searching by date, (separates get/post request as well)
//             isSearching : false, //searching flag after being enabled
//         }  
//     } 

//     //track pages from pagination
//     getPageCount = (totalRecords) => {
//         let condition = (totalRecords % this.state.pageSize)
//         let value = totalRecords / this.state.pageSize

//         let a = value
//         let b = parseInt(value) + 1

//         // console.log('condition >> ', condition)
//         // console.log('a >> ', a)
//         // console.log('b >> ', b) 
        
//         let result =  condition === 0 ? a : b  
//         return result 
//     }

//     //change date time format of the columns of time related values
//     changeDateTimeFormat(data, individualItem = null){  
//         if(individualItem === null){ //individual item distinguishes between initial load and add/update item event
//             data.forEach((item, index) => {  
//                 let obj = data[index]    
//                 obj.createdAt =  datetime.getFormattedDateTime(item.createdAt)
//                 obj.updatedAt =  datetime.getFormattedDateTime(item.updatedAt) 
//                 data[index] = obj  
//             })   
//         } else {
//             let itemIndex = data.indexOf(individualItem)
//             individualItem.createdAt =  datetime.getFormattedDateTime(individualItem.createdAt)
//             individualItem.updatedAt =  datetime.getFormattedDateTime(individualItem.updatedAt) 
//             data[itemIndex] = individualItem
//         }
        
//         this.setState({data}) 
//     }

//     //send get request 
//     sendGetRequest = (url, isRefreshCall, isPageChanging) => {
//         console.log('sending get request >> ') 

//         httpClient
//             .get(url, {}, true)
//             .then(result => {
//                 console.log("fetch result >> ", result)
//                 this.setState((pre) => ({
//                     data: result.rows,
//                     totalRecords: result.totalRowsCount,
//                     totalPages: this.getPageCount(result.totalRowsCount),
//                     pageNumber: (this.state.totalPages < pre.totalPages ? this.state.pageNumber : 1) //this line fixes pagination issues with material-ui
//                 }), () => {
//                     console.log('callback update >> ', this.state.data)
//                     console.log('current page number >> ', this.state.pageNumber)
//                 })
//                 this.changeDateTimeFormat(this.state.data)
//                 // console.log('total records >> ', this.state.totalRecords)                
//                 // console.log('total page count >> ', this.state.totalPages)    
//                 if (isRefreshCall) {
//                     notify.showSuccess('Table Refreshed Successfully!')
//                 }
//                 else {
//                     if (!isPageChanging)
//                         notify.showInfo(`${this.state.totalRecords} Records Found`)
//                 }
//             })
//             .catch(err => {
//                 console.log('err from fetching data >> ', err)
//                 notify.handleError(err)
//             })
//             .finally(() => {
//                 this.setState({ isLoading: false, isSearching: false })
//             })
//     } 

//     //send post request for search by date range
//     sendPostRequest = (url, isRefreshCall, isPageChanging) => {
//         console.log('sending post request >> ')

//         let data = {
//             startDate : this.state.startDate,
//             endDate : this.state.endDate 
//         }

//         httpClient
//             .post(url, data, {}, true) 
//             .then(result => {
//                 console.log("fetch result >> ", result)
//                 this.setState((pre) => ({
//                     data: result.rows,
//                     totalRecords: result.totalRowsCount,
//                     totalPages: this.getPageCount(result.totalRowsCount),
//                     pageNumber: (this.state.totalPages < pre.totalPages ? this.state.pageNumber : 1) //this line fixes pagination issues with material-ui
//                 }), () => {
//                     console.log('callback update >> ', this.state.data)
//                     console.log('length of data >> ', this.state.data.length)
//                     console.log('current page number >> ', this.state.pageNumber)
//                 })
//                 this.changeDateTimeFormat(this.state.data)
//                 // console.log('total records >> ', this.state.totalRecords)                
//                 // console.log('total page count >> ', this.state.totalPages)    
//                 if (isRefreshCall) {
//                     notify.showSuccess('Table Refreshed Successfully!')
//                 }
//                 else {
//                     if (!isPageChanging)
//                         notify.showInfo(`${this.state.totalRecords} Records Found`)
//                 }
//             })
//             .catch(err => {
//                 console.log('err from fetching data >> ', err)
//                 notify.handleError(err)
//             })
//             .finally(() => {
//                 this.setState({ isLoading: false, isSearching: false })
//             })
//     }

//     //fetch from back end
//     fetchDataForGrid = (isRefreshCall = false, isPageChanging = false, isSearching = false) => {
//         this.setState({ isLoading : true, isSearching : true })  

//         //console.log('is searching only >> ', isSearching)

//         let url  = isSearching 
//                 ? FetchDataUrlForSearch(this.state.pageSize, this.state.pageNumber, this.state.searchData.name)
//                 : FetchDataUrl(this.state.pageSize, this.state.pageNumber) 
 
//         //console.log('is  date searching >> ', this.state.isDateSearching)
//         //console.log('is date searching url >> ', url)
            
//         //search as per requirement
//         this.state.isDateSearching 
//         ? this.sendPostRequest(url, isRefreshCall, isPageChanging) 
//         : this.sendGetRequest(url, isRefreshCall, isPageChanging)   
//     } 

//     componentDidMount(){   
//         this._isMounted = true
//         this.fetchDataForGrid() 
//     }

//     //dialog open for add/edit dialog
//     handleDialogOpen = () => {
//         this.setState({
//             isDialogOpen : true
//         })
//     }

//     //dialog close for add/edit/confirmation dialog
//     handleDialogClose = () => {
//         this.setState({
//             isDialogOpen : false,
//             isDeleteConfirmationOpen : false,
//             isAddDefaultDialog : true,
//             editValues : null 
//         })
//     } 

//     //handler upon successfully adding items
//     handleSuccessfulItemAdded = (value, addedItem) => {
//         //update the table
//         console.log('added item >> ', addedItem); 
//         const {data} = this.state
//         data.unshift(addedItem) 
//         this.changeDateTimeFormat(data, addedItem) 

//         this.setState({
//             submitted : value,
//             selectedRow : addedItem
//         }) 

//         //console.log('from parent recived props value >> ', this.state.submitted)
//         this.handleDialogClose()
//     }

//     //handler upon succesfully updating items 
//     handleSuccessfulItemUpdated = (value, updatedItem) => {       
//         //update the table
//         const { data } = this.state 
//         let index = data.findIndex(x => x._id === updatedItem._id)
//         data[index] = updatedItem
//         this.changeDateTimeFormat(data, updatedItem) 

//         this.setState({
//             submitted : value,
//             selectedRow : updatedItem
//         })

//         //console.log('from parent recived props value >> ', this.state.submitted)
//         this.handleDialogClose()  
//     }

//     //handler upon delete confirmed for deleting row from delete confirmation dialog
//     handleDeleteConfirmDialogClose = (value) => {
//         //console.log('value from dialog >> ', value)
        
//         this.setState({ 
//             isDeleteConfirmationOpen : false 
//         })
//         this.setState({
//             deleteConfirmed : value
//         }, () => {
//             //console.log('delete confirmed from cb ? >> ', this.state.deleteConfirmed)
//             //remove data
//             if(value) {
//                 setTimeout(() => {
//                     this.setState({ isRowDeleting : true }) 
//                     this.handleRowStyle(this.state.deletingRow) 
//                     this.removeRowData(this.state.deletingRow)   
//                 }, 10) //delay of 10ms to show delteting effect 
//             }
//         })         
//     }

//     //handler to stylize rows as per selection including editing or deleting
//     handleRowStyle = (rowData) => {  
//         let index = this.state.data.indexOf(rowData)
//         let backgroundColor = (index % 2 ? '#eeddcc' : 'gray') 

//         let defaultSelectedColor = (this.state.selectedRow && 
//                                     this.state.selectedRow._id === rowData._id ? '#064683' : backgroundColor)

//         let deletingSelectedColor = (this.state.selectedRow && 
//                                     this.state.selectedRow._id === rowData._id) ? '#d32f2f' : backgroundColor
        
//         // console.log('deleting color >> ', deletingSelectedColor)
//         // console.log('delte cfrm >> ', this.state.deleteConfirmed) 

//         return { 
//             backgroundColor : (this.state.deleteConfirmed ? deletingSelectedColor : defaultSelectedColor)
//         }
//     }

//     //handler to edit row
//     handleRowEdit = (rowData) => {
//         //console.log('row data >> ', rowData)
//         this.setState({
//             editValues : rowData,
//             isAddDefaultDialog : false,
//             selectedRow : rowData
//         })
//         this.handleDialogOpen()
//     }

//     //remove the row data from back end
//     removeRowData = (rowDelete) => {
//         httpClient.remove(DeleteUrl(rowDelete._id), true) 
//             .then(res => {
//                 console.log('removed >> ', res); 
//                 notify.showSuccess('Data Removed Successfully') 
                 
//                 const { data } = this.state 
//                 data.splice(data.findIndex(x => x._id === rowDelete._id), 1)
//                 this.setState({
//                     data 
//                 })
//             })
//             .catch(err => {
//                 console.log('err at handle row >> ', err);                
//                 notify.handleError()
//             })
//             .finally(() => {
//                 this.setState({ 
//                     deleteConfirmed : false,
//                     isLoading : false,
//                     isRowDeleting : false, 
//                     deletingRow : null,
//                     isAddDefaultDialog : true
//                 }) 
//             }) 
//     }

//     //handler to delete the row from the table
//     handleRowDelete = (rowDelete) => {
//         //set deleting row
//         //console.log('row data >> ', rowDelete)    
//         this.setState({ 
//             deletingRow : rowDelete,
//             selectedRow : rowDelete
//         }) 

//         //display the dialog first
//         this.setState({ isDeleteConfirmationOpen : true }) 
//         //console.log('delte confirmation  >> ', this.state.isDeleteConfirmationOpen)   
//     }

//     //refresh the table
//     refreshGrid = () => { 
//         setTimeout(() => {  
//             this.fetchDataForGrid(true) 
//         }, 10) 
//     }

//     //page change event
//     onPageChanged = (value) => {
//         //debugger
//         console.log('page number changed >> ', value)

//         this.setState({
//             pageNumber : value 
//         }, () => {
//             //fetch data for search if searched else normal data for grid
//             if(this.state.searchData.name.length > 0){
//                 console.log('check total searched items >> ', this.state.data.length)
//                 this.fetchDataForGrid(false, true, true)  
//             }else{ //for page based searching
//                 if(this.state.data.length > 0){
//                     this.fetchDataForGrid(false, true, true)
//                 }else{
//                     this.fetchDataForGrid(false, true, false) 
//                 }
//             }
//         })  
//     }

//     componentWillUnmount(){
//         // fix Warning: Can't perform a React state update on an unmounted component
//         this.setState = (state,callback) => {
//             return
//         }
//     }

//     //api call for searching implementation and binding with grid
//     fetchDataForSearch = e => { 
//         e.preventDefault() 
//         console.log('search text >> ', this.state.searchData.name)

//         console.log('check total searched items >> ', this.state.data.length)
//         this.fetchDataForGrid(false, false, true, this.state.isDateSearching)   
        
//         //console.log('start date from main component >> ', this.state.startDate)
//         //console.log('end date from main component >> ', this.state.endDate)    
//         console.log('isDateSearchingCondition from main component search action >> ', this.state.isDateSearching) 
//     } 

//      //date change event  
//      onDateChanged = (startDate, endDate, isDateSearching) => { 
//         this.setState({
//             startDate,
//             endDate : (endDate === null ? startDate : endDate), 
//             isDateSearching 
//         }, () => {
//             console.log('start date from main component >> ', this.state.startDate)
//             console.log('end date from main component >> ', this.state.endDate) 
//             console.log('isDateSearchingCondition from main component >> ', this.state.isDateSearching) 
//         }) 
//     }

//     //handle search
//     handleSearch = e => {
//         const { name, value } = e.target
//         this.setState((pre) => ({
//             searchData : {
//                 ...pre.searchData,
//                 [name] : value 
//             }
//         }), () => {
//             //notify that back end call won't work until search chars less than 31
//             if(this.state.searchData.name.length > 31){
//                 notify.showWarning('Enter less than 31 characters for searching.') 
//             } 
//         })   
//     }  

//     render() {    
//         let closeButton =   <Button color="primary" 
//                                     variant="contained" 
//                                     onClick={this.handleDialogClose} 
//                                     size="large" 
//                                     startIcon={<CancelIcon />}
//                             >
//                                 Close
//                             </Button>

//         let dialogAddEdit = <Dialog 
//                                 open={this.state.isDialogOpen}                          
//                                 onClose={this.handleDialogClose} 
//                                 TransitionComponent={TransitionLeft}  
//                                 disableBackdropClick  
//                             > 
//                                 <DialogTitle id="alert-dialog-slide-title">
//                                     {
//                                         this.state.isAddDefaultDialog
//                                         ? "Add Industry Category"
//                                         : "Edit Industry Category"
//                                     } 
//                                 </DialogTitle>
//                                 <DialogContent id="alert-dialog-slide-description"> 
//                                     <IndustryCategoryFormComponent    
//                                             OnSuccessfulAddItem={ this.handleSuccessfulItemAdded }
//                                             closeButton={closeButton}  
//                                             editValues = { this.state.editValues }
//                                             OnSuccessfulUpdateItem = { this.handleSuccessfulItemUpdated }
//                                             isAddDefaultDialog = { this.state.isAddDefaultDialog }
//                                     />
//                                 </DialogContent> 
//                             </Dialog>  
        
//         let spinnerGrid = <div className="gridSpinner">
//                                 <SpinnerComponent 
//                                         spinnerType={"Roller"} 
//                                         isLoading={this.state.isLoading}   
//                                 /> 
//                          </div> 

//         let materialTable = <div className="grid">  
//                             <MaterialTable        
//                                 title = { "List of Industry Categories "}                
//                                 data = { this.state.data || [] } 
//                                 columns = {this.state.columns }
//                                 isLoading = { this.state.isLoading } 
//                                 options = {{  
//                                     pageSize : 5,
//                                     pageSizeOptions : [5, 10, 20],
//                                     paginationType : "stepped",                                    
//                                     maxBodyHeight : 400,
//                                     showEmptyDataSourceMessage : !this.state.isLoading, 
//                                     sorting : true,
//                                     rowStyle : rowData => this.handleRowStyle(rowData),  
//                                     actionsCellStyle: { 
//                                         backgroundColor: headerStyle 
//                                     },
//                                     headerStyle : headerStyle
//                                 }}  
//                                 components = {{ 
//                                     OverlayLoading : () => (<>{ spinnerGrid }</>)  
//                                 }}  
//                                 onRowClick = {  
//                                     ( 
//                                         (e, selectedRow) => ( 
//                                             this.setState({ selectedRow }, () => {
//                                                 console.log('slected row .>> ', selectedRow)
//                                             })  
//                                         )
//                                     )
//                                 } 
//                                 actions = {[
//                                     {   
//                                         icon : () => (<>  
//                                                         { 
//                                                             !this.state.isLoading
//                                                             ? <RefreshIcon color={
//                                                                                 !this.state.isLoading
//                                                                                 ? "primary"
//                                                                                 : "disabled" 
//                                                                             } />  
//                                                             : <span></span>
//                                                         } 
//                                                     </>),  
//                                         tooltip : 'Refresh Data', 
//                                         onClick : () => { this.refreshGrid() },
//                                         isFreeAction : !this.state.isLoading 
//                                     },
//                                     {  
//                                         icon : () => (<> 
//                                                         <Edit color="primary" />  
//                                                      </>), 
//                                         tooltip : 'Edit', 
//                                         onClick : (e, rowData) => this.handleRowEdit(rowData)
//                                     },
//                                     { 
//                                         icon : () => (<> 
//                                                         {
//                                                             this.state.isRowDeleting 
//                                                             ?   <span>
//                                                                     <CircularProgress color="secondary" /> 
//                                                                 </span> 
//                                                             : <DeleteIcon color="action" /> 
//                                                         } 
//                                                      </>), 
//                                         tooltip : 'Delete', 
//                                         onClick : (e, rowData) => {   
//                                                             console.log('row seletd >> ', this.state.selectedRow)                                                        
//                                                             this.handleRowDelete(rowData)                                                              
//                                                          } 
//                                     } 
//                                 ]}  
//                             >
                                
//                             </MaterialTable>
//                             </div>
               
//         let confirmDelete = <ConfirmationDialogComponent 
//                                 open = { this.state.isDeleteConfirmationOpen }                                  
//                                 onSuccessfullyApiCalled = { this.handleDeleteConfirmDialogClose }
//                             />

//         let pagination = <MyPagination  
//                             totalPages = { this.state.totalPages } 
//                             pageNumber = { this.state.pageNumber }
//                             onPageChanged = { this.onPageChanged }
//                          /> 

//         let btnSearchName = this.state.isSearching
//                             ?<Button variant="contained" color="default" disabled={true}>Searching ...</Button>                                                 
//                             :<Button variant="contained" color="primary" size="large"  
//                                     disabled={this.state.searchData.name.length < 31 ? false : true} 
//                                     onClick={this.fetchDataForSearch}   
//                             > Search </Button>

//         let datePickers = <DatePickerComponent
//                                 startDate = { this.state.startDate }
//                                 endDate = { this.state.endDate }
//                                 onDateChanged = { this.onDateChanged }
//                           /> 
                          
//         let searchTextBox = <>
//                                 <div className="search">  
//                                     <div style={{ marginBottom : '10px' }}>   
//                                         <TextField 
//                                             id="filled-search"  
//                                             name="name"  
//                                             label="Search by Name" 
//                                             type="search"
//                                             variant="filled"
//                                             onChange = { this.handleSearch }  
//                                             value = { this.state.searchData.name || '' }                                         
//                                             InputProps={{
//                                                 endAdornment: (
//                                                     <>
//                                                         <InputAdornment> 
//                                                                 <SearchIcon /> 
//                                                         </InputAdornment>
//                                                     </>   
//                                                 ) 
//                                             }} 
//                                         /> 
//                                     </div>   

//                                     <div className="searchIndustryCategoryName">                                        
//                                         {btnSearchName}
//                                     </div> 

//                                     <div className="datepickers">  
//                                         {datePickers}
//                                     </div> 
//                                 </div>   
//                             </> 
 
//         return (
//             <>  
//                 <div className="add">  
//                     <span>
//                         <IconButton color="primary" aria-label="Add" 
//                             onClick={ this.handleDialogOpen }
//                         >
//                             <AddCircleIcon fontSize="large" />
//                         </IconButton>  
//                     </span> 
//                     <span>
//                         {dialogAddEdit} 
//                     </span>  
//                     <br />
//                     <span>
//                         {searchTextBox}
//                     </span> 
//                 </div>   
                 
//                 <div>    
//                     <span>{ confirmDelete }</span>   
//                     <span>{ materialTable }</span>
//                 </div>  

//                 <div className="paginator"> 
//                     <span>{this.state.data.length < 1 ? '' : pagination}</span> 

//                     {/* this line fixes design issues while loading the page initially */}
//                     {/* <span>{this.state.data.length < 1 ? materialTable : ''}</span>  */} 
//                 </div>   
//             </>
//         )
//     }
// }