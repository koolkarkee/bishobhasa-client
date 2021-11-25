import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import HomeDesktopComponent from './homedesktop.component' 

const HomeComponent = function(props) { 
    
    return (
        <> 
           <HomeDesktopComponent></HomeDesktopComponent> 
        </>  
    )
}

export default withRouter(HomeComponent)
