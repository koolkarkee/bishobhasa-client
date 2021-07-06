import React, { Component} from 'react'
import { Link } from 'react-router-dom' 

import Container from '@material-ui/core/Container' 
import CssBaseline from '@material-ui/core/CssBaseline' 

import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel' 
import SupervisorAccount from '@material-ui/icons/SupervisorAccount'
import IconButton from '@material-ui/core/IconButton'
import OutlinedInput from '@material-ui/core/OutlinedInput' 
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl' 
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff' 
import FormGroup from '@material-ui/core/FormGroup'
 
import LoginCheckBox from './login.checkbox'  
import BootStrapToolTip from '../../common/tooltip/bootstraptooltip.component' 
import LoginValidation from './login.validation'
import { httpClient } from '../../../utils/httpClient'
import notify from '../../../utils/notify'

const defaultForm = {
    username : '',
    password : ''
}

const loginUrl = '/auth/login' 

export class LoginComponent extends Component { 
    constructor(){
        super()
        this.state = {
            data : { ...defaultForm },
            err : { ...defaultForm },
            hidePasswordFlag : false,
            rememberMe : false,
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
        let errMsg = LoginValidation.validate(fieldName, this.state.data[fieldName])

        this.setState((pre) => ({
            err : {
                ...pre.err,
                [fieldName] : errMsg
            }
        }), () => {
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
            //validate form
            this.validateForm(name)
        })
    }
   
    togglePasswordShow = e => {
        this.setState({ hidePasswordFlag : !this.state.hidePasswordFlag })  
    }

    handleMouseDownPassword = e => {
        e.preventDefault()
    }

    handleCheckedChangedForRememberMe = e => {    
        this.setState({ rememberMe : !this.state.rememberMe }) 
        console.log('checked >> ', !this.state.rememberMe)   
    } 

    callLoginApi(){ 
        httpClient
            .post(loginUrl, this.state.data)            
            .then(data => {
                console.log('response >> ', data);   
                notify.showSuccess(`Welcome ${data.user.username}`)

                //local storage
                localStorage.setItem('token', data.token) //TODO: Append bearer string in token @ server
                localStorage.setItem('user', JSON.stringify(data.user)) 
                 
                this.props.history.push(`/dashboard`)     
            })
            .catch(err => {
                console.log('http err from api calling >> ', err);     
                notify.handleError(err)   
                
                console.log('api calling completed .. ')
                this.setState({
                    isSubmitting : false 
                }) 
            }) 
    }

    handleSubmit = (e) => {
        e.preventDefault()         
        console.log('this.state now >> ', this.state)

        //http call now
        if(this.state.isValidForm){
            console.log('proceed further >> ')

            this.setState({
                isSubmitting : true
            }) 
            console.log('submitting >> ', this.state.isSubmitting)
            console.log('api calling started ... ')
 
            this.callLoginApi() 
        }
    }

    render(){ 
        let btn = this.state.isSubmitting 
        ?<Button variant="contained" color="primary" disabled={true}>Logging In ...</Button>                                                 
        :<Button variant="contained" color="primary" disabled={this.state.isValidForm ? false : true} 
            type="submit">Login</Button>        

        return(
            <>
            <CssBaseline />
            <Container maxWidth="xs">       
            <div>
                <form className="form-group" onSubmit={this.handleSubmit}>   
                    <div>                        
                        <h2>Login</h2>
                        <p>Please login to start your session</p>
                    </div>   
                    <FormGroup column = "true"> 
                        <FormControl variant="outlined"> 
                            <InputLabel 
                                htmlFor=""
                                error = { this.state.err.username ? true : false }
                            >Username</InputLabel>
                            <OutlinedInput  
                                required 
                                type = "text"
                                label="Required" 
                                variant="outlined" 
                                name="username"  
                                onChange = { this.handleChange }
                                error = { this.state.err.username ? true : false }
                                autoFocus
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
                                htmlFor="outlined-adornment-password"
                                error = { this.state.err.password ? true : false }
                            >Password</InputLabel>                          
                            <OutlinedInput 
                                required  
                                id="outlined-adornment-password"  
                                label="Password"  
                                name="password" 
                                type = { this.state.hidePasswordFlag ? 'text' : 'password' }
                                value = { this.state.password } 
                                onChange = { this.handleChange } 
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
                        <LoginCheckBox
                            onChange = { this.handleCheckedChangedForRememberMe }
                            name = "checkedForRememberMe" 
                            value = { this.state.checkBoxChecked }                          
                        />  
                        {btn}                   
                    </FormGroup>   
                </form>
                <p>
                    <Link to="/register">Sign up</Link> your new DegoX Account
                </p>
                <p>
                    <Link to="/forgot-password">Forgot Password?</Link>  
                </p>
            </div>           
            </Container>
            </>
        )
    }

}