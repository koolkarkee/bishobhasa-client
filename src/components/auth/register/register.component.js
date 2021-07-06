import React, {Component} from 'react' 

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline' 
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import SupervisorAccount from '@material-ui/icons/SupervisorAccount'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff' 
import EmailRoundedIcon from '@material-ui/icons/EmailRounded'
import Button from '@material-ui/core/Button'

import BootStrapToolTip from '../../common/tooltip/bootstraptooltip.component'
import RegisterValidation from './register.validation'

const defaultForm = {
    username : '',
    email : '',
    password : ''
}

export class RegisterComponent extends Component {
    constructor(){
        super()
        this.state = {
            data : { ...defaultForm },
            err : { ...defaultForm },
            hidePasswordFlag : false,
            isSubmitting : false,
            isValidForm : false
        }
    }

    isFormValidated(){
        let errors = Object
                        .values(this.state.err)
                        .filter(x => x) 
        console.log('errors filtered >> ', errors);

        this.setState({
            isValidForm : errors.length === 0  
        })
    }
    
    validateForm(fieldName){
        let errMsg = RegisterValidation.validate(fieldName, this.state.data[fieldName])
       
        this.setState((pre) => ({
            err : {
                ...pre.err,
                [fieldName] : errMsg
            }
        }), () => {
            //check the form is valid or not
            this.isFormValidated()
        })
    }

    handleChange = e => {
        const { name, value } = e.target 
        this.setState((pre) => ({
            data : { 
                ...pre.data,
                [name] : value 
            }
        }), () => {
            console.log('data is >> ', this.state.data);   
            console.log('errors in form >> ', this.state.err);

            this.validateForm(name)  
        })
    } 

    togglePasswordShow = e => {
        this.setState({ hidePasswordFlag : !this.state.hidePasswordFlag }) 
        //console.log('flag >> ', this.state.hidePasswordFlag)
    }

    handleMouseDownPassword = e => {
        e.preventDefault()
    }

    handleSubmit = e => {
        e.preventDefault()       
        console.log('form is valid >> ', this.state.isValidForm) 

        if(this.state.isValidForm){
            console.log('proceed further >> ')

            this.setState({
                isSubmitting : true
            }) 
            console.log('submitting >> ', this.state.isSubmitting)
            console.log('api calling started ... ')

            setTimeout(() => {
                console.log('api calling completed .. ')
                this.setState({
                    isSubmitting : false 
                }) 
            }, 3000)             
        }
    }

    render(){
        let btn = this.state.isSubmitting 
                    ?<Button variant="contained" color="primary" disabled={true}>Registering ...</Button>                                                 
                    :<Button variant="contained" color="primary" disabled={this.state.isValidForm ? false : true} 
                        type="submit">Register</Button>       
               
        return(
            <>   
            <CssBaseline />
            <Container maxWidth="xs">
            <div>
                <h2>Sign up</h2>
                <p>Please register</p>
                <form className="form-group" onSubmit = { this.handleSubmit }>
                    <FormGroup column = "true">
                        <FormControl variant="outlined">  
                        <InputLabel
                            error = {this.state.err.username ? true : false }
                        >Username*</InputLabel>  
                            <OutlinedInput 
                                required 
                                type = "text"
                                label="Required" 
                                variant="outlined" 
                                name="username"  
                                onChange = { this.handleChange }
                                error = { this.state.err.username ? true : false }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <BootStrapToolTip 
                                            title = {<>
                                                        - Username is required field<br/> 
                                                        - should be at least five characters long<br/>
                                                        - only include alphabet and numerics<br/> 
                                                    </> } 
                                            placement = "right"                                            
                                        >
                                            <SupervisorAccount />
                                        </BootStrapToolTip>                                        
                                    </InputAdornment>
                                }                               
                            >                          
                            </OutlinedInput>   
                            <p className="validationError">{this.state.err.username}</p>     
                        </FormControl>                      
                        <br/> 
                        <FormControl variant="outlined">
                            <InputLabel
                                error = { this.state.err.email ? true : false }
                            >Email*</InputLabel> 
                            <OutlinedInput
                                required
                                name = "email"
                                type = "text"
                                label = "Required"
                                variant = "outlined"
                                onChange = { this.handleChange }
                                error = { this.state.err.email ? true : false }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <EmailRoundedIcon />
                                    </InputAdornment>
                                }   
                            /> 
                            <p className="validationError">{this.state.err.email}</p>               
                        </FormControl>
                        <br/>
                        <FormControl variant="outlined">                  
                            <InputLabel 
                                htmlFor="outlined-adornment-password"
                                error = { this.state.err.password ? true : false }
                            >Password*</InputLabel>                          
                            <OutlinedInput 
                                required  
                                id="outlined-adornment-password"  
                                label="Password"  
                                name="password" 
                                type = { this.state.hidePasswordFlag ? 'text' : 'password' }
                                value = { this.state.password } 
                                onChange = { this.handleChange.bind(this) } 
                                error = { this.state.err.password ? true : false }
                                endAdornment = {
                                    <InputAdornment position = "end"> 
                                        <BootStrapToolTip 
                                            title = {<>
                                                        - Password is required filed<br/>
                                                        - should be at least six characters long<br/>                                                         
                                                    </>}  
                                            placement = "right"                                            
                                        >
                                            <IconButton
                                                aria-label = "toggle password visibility"
                                                onClick = { this.togglePasswordShow } 
                                                onMouseDown = { this.handleMouseDownPassword }
                                                edge = "end"                                    
                                            >
                                            { this.state.hidePasswordFlag ? <Visibility /> : <VisibilityOff /> } 
                                            </IconButton> 
                                        </BootStrapToolTip>                                       
                                    </InputAdornment> 
                                }  
                            />  
                            <p className="validationError">{this.state.err.password}</p>               
                        </FormControl>
                        <br/> 
                        {btn}
                    </FormGroup>
                </form>
            </div>
            </Container>
            </>
        )
    }
}  