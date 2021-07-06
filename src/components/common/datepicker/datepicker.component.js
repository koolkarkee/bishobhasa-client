import React, { Component } from 'react'
import { KeyboardDatePicker, MuiPickersUtilsProvider  } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import { Checkbox, FormGroup, FormControlLabel } from '@material-ui/core'

import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default class DatePickerComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
             startDate : this.props.startDate,
             endDate : this.props.endDate,
             isDateSearching : false, //for allowing searching by date
             checked : false //for allowing search by date range (for same day search, allow mulitple with same date)
        }  
    } 

    //compare start and end dates and validate 
    validateDates = (startDate, endDate) => {  
        this.props.onDateChanged(this.state.startDate, this.state.endDate, this.state.isDateSearching)

        if(startDate > endDate){
            console.log('invalid date >> start date is more than end date ')

            //reset end date to null
            this.setState({ 
                endDate : startDate,
                checked : false 
            }, () => { 
                //send null to parent for end date (but display current date) 
                this.props.onDateChanged(this.state.startDate, null, this.state.isDateSearching)
            }) 
        }  
    }
     
    //making separate handlers for start date and end date as per the documentation of KeyboardDatePicker
    handleStartDateChange = (date) => { 
        this.setState({
            startDate : date 
        }, () => {
            //if the start date is greater than end date, then reset start date or assign end date
            this.validateDates(date, this.state.endDate)

            //console.log('selected start date >> ', this.state.startDate)
        }) 
    }

    handleEndDateChange = (date) => {
        this.setState({
            endDate : date
        }, () => {
            //validate date
            this.validateDates(this.state.startDate, date)

            //console.log('selected end date >> ', this.state.endDate)
        }) 
    } 

    //check box changed event
    handleCheckedChange = e => {    
        console.log('e >> ', e) 

        this.setState({ 
            checked : !this.state.checked 
        }, () => {
            console.log('checked inside date >> ', this.state.checked) 
            console.log('selected start date >> ', this.state.startDate)
            console.log('selected end date >> ', this.state.endDate)

            //select current date for disabled - End Date selection 
            if(!this.state.checked) 
                this.setState({ endDate : new Date() }) 
        }) 
    }

    handleCheckedIsDateSearchingChange = e => {
        this.setState({ 
            isDateSearching : !this.state.isDateSearching
        }, () => {
            console.log('isDateSearching checked >> ', this.state.isDateSearching)
            console.log('clicked start date >> ', this.state.startDate)
            console.log('clicked end date >> ', this.state.endDate)

            this.validateDates(this.state.startDate, this.state.endDate)
        })
    }

    handleStartDateClick = e => {
        console.log('clicked start date >> ', this.state.startDate)
        this.validateDates(this.state.startDate, this.state.endDate)
    }

    handleEndDateClick = e => {
        console.log('clicked end date >> ', this.state.endDate)
        this.validateDates(this.state.startDate, this.state.endDate)
    }
    
    render() {

        let startDate = <KeyboardDatePicker
                            name="startDate" 
                            margin="normal"
                            id="date-picker-dialog-start"
                            label="Start Date" 
                            format="MM/dd/yyyy"  
                            value={this.state.startDate}
                            onChange={this.handleStartDateChange}    
                            onClick={this.handleStartDateClick}                          
                            KeyboardButtonProps={{ 
                                'aria-label': 'change date',
                            }}
                        />   

        let endDate = <KeyboardDatePicker
                            name="endDate" 
                            margin="normal"
                            id="date-picker-dialog-end" 
                            format="MM/dd/yyyy"
                            label="End Date"
                            value={this.state.endDate} 
                            onChange={this.handleEndDateChange}  
                            onClick={this.handleEndDateClick}
                            disabled={!this.state.checked} 
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />  

        let checkedEndDate = <FormGroup>
                                    <FormControlLabel
                                        control = {
                                            <Checkbox
                                                name="checked" 
                                                checked={this.state.checked}
                                                onChange={this.handleCheckedChange}
                                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                                                size="medium"
                                            /> 
                                        }
                                        label = "Allow Multiple Date Range"  
                                    /> 
                            </FormGroup>   
         
        let checkedIsDateSearching = <FormGroup>
                                            <FormControlLabel 
                                                control = {
                                                    <Checkbox
                                                        name="checkedIsDateSearching" 
                                                        checked={this.state.isDateSearching}
                                                        onChange={this.handleCheckedIsDateSearchingChange}
                                                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                                                        size="medium"
                                                    /> 
                                                }
                                                label = "Allow Date Filter"  
                                            /> 
                                    </FormGroup>  
                                    
        let searchFields = <MuiPickersUtilsProvider utils={DateFnsUtils}> 
                                <div style={{alignItems : 'center'}}>
                                    <div style={{display: 'inline-block'}}>
                                        {startDate}
                                    </div> 
                                    <div style={{display: 'inline-block', marginLeft:'15px'}}>    
                                            {endDate} 
                                    </div> 
                                    <div>
                                        { checkedEndDate }
                                    </div>
                                </div>  
                            </MuiPickersUtilsProvider> 

        let searchAccordion = <Accordion
                                    expanded={this.state.isDateSearching} 
                                >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-label="Expand"
                                    aria-controls="additional-actions1-content"
                                    id="additional-actions1-header"
                                >  
                                    {checkedIsDateSearching}  
                                </AccordionSummary>
                                <AccordionDetails>  
                                        {searchFields} 
                                </AccordionDetails> 
                             </Accordion> 
         
        return (  
                <>  
                    {searchAccordion}
                </>
        )
    }
}
