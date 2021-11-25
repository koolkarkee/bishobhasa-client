import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import HomeDesktopComponent from './homedesktop.component' 
import  HomeMobileComponent from "./homemobile.component";

const HomeComponent = function(props) { 
    
    return (
        <> 
           <HomeMobileComponent></HomeMobileComponent>
           <HomeDesktopComponent></HomeDesktopComponent> 
        </>  
    )
}

export default withRouter(HomeComponent)
