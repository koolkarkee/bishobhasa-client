import React, {Component} from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const MyCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);


export default class LoginCheckBox extends Component {
  constructor(props){
    super(props) 
    this.state = {
      rememberMe : props.value
    } 
  } 

  render(){
    return ( 
        <>
          <FormControlLabel
              control = {
                  <MyCheckbox    
                      onChange = { this.props.onChange }
                      name = "checkedForRememberMe" 
                      value = { this.state.rememberMe }                                    
                      inputProps = {{ 'aria-label' : '#0f0' }}      
                  />   
              } 
              label = "Remember me" 
          />
        </>
    )
  }
}