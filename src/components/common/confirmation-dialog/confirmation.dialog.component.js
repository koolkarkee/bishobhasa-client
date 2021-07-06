import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export default class ConfirmationDialogComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen : false 
        } 
    }

    handleClose = () => {
        this.setState({
            isOpen : false 
        })
    }

    componentDidMount(){
        this.setState({
            isOpen : this.props.open
        })
    }

    handleAgree = (value) => {
        this.handleClose()
        this.props.onSuccessfullyApiCalled(value) 
    }

    render() {
        return (
                <>
                    <Dialog
                        open={this.props.open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle id="alert-dialog-slide-title">{"Are you sure you want to delete this item?"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    
                                </DialogContentText>
                            </DialogContent>
                        <DialogActions>
                            <Button onClick={ () => this.handleAgree(true) } variant="outlined" color="primary">
                                Agree
                            </Button>
                            <Button onClick={ () => this.handleAgree(false)} variant="outlined" color="secondary">
                                Disagree
                            </Button>
                        </DialogActions>
                    </Dialog> 
            </>
        )
    }
}
