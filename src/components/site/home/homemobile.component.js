import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

const HomeMobileComponent = function(props) { 
    
    return (
        <> 
        {/* This class is made for Mobile or Small devices */}
            <div class="hero container-Ad is-light">
                 <div class="mobile-animate"> 
                    Make no bad choices.  
                    <br/>Choose us. <br/>  
                 </div> 
            </div> 
        </>  
    )
}

export default withRouter(HomeMobileComponent)
