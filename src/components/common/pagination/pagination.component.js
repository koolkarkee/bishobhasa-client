import React, { Component } from 'react'
import Pagination from '@material-ui/lab/Pagination'

export default class MyPagination extends Component {
    constructor(props){
        super(props)
        this.state = {
            totalPages : this.props.totalPages,
            currentPage : this.props.pageNumber
        }
    } 

    

    handleChange = (event, value) => {
        this.setState({
            currentPage : value
        }, () => { 
            this.props.onPageChanged(value) 
        })
    } 

    render() {
        let pagination = <Pagination 
                                //hidden={this.state.totalPages < 1 ? true : false}
                                variant = "outlined" 
                                shape = "rounded"
                                color = "secondary"
                                showFirstButton
                                showLastButton
                                count={ this.props.totalPages } 
                                page={ this.props.pageNumber }  
                                onChange={ this.handleChange } 
                         /> 

        return (
            <>
                <span>{pagination}</span>  
            </> 
        )
    }
}
