import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

const HomeDesktopComponent = function(props) { 
    
    return (
        <> 
        {/* This class is made for Mobile or Small devices */}
            <div class="hero container-Ad is-light">
                 <div class="mobile-animate"> 
                    Make no bad choices.  
                    {/* <br/>Choose us.   */}
                 </div>
                 <div class="mobile-animate-2"> 
                    Be a family of Bishobhasha. 
                 </div>
            </div>
            <div class="hero de-v-h-center">
                <div class="de-v-h-center">
                    <div class="container-slide">

                    </div>
                    
                    <div class="outer">

                        <div class="details de-v-h-center">
                            <h1>Make no bad choices, choose us.</h1>
                            <p class="subtitle mt-2">
                                Be a family of Bishobhasha. We care on shaping your goals. <br />  
                                Opportunities don't happen, you create them.
                            </p>

                                {/* <div class="de-bottom">
                                    <figure>
                                    <a href="#"><i class="fas fa-sign-in-alt mr-1"></i></a>
                                    <a href="#">Login | signup</a>
                                    </figure>
                                </div> */}

                                {/* <p class="subtitle mt-2">
                                    Opportunities don't happen, you create them.
                                </p> */}
                        </div>
                    </div>
                </div>
            </div>
 
        </>  
    )
}

export default withRouter(HomeDesktopComponent)
