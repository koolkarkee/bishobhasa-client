import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

const HomeDesktopComponent = function(props) { 
    
    return (
        <> 
            <div class="hero de-v-h-center" style={{marginTop:-80}}>
                <div class="de-v-h-center hero is-light" >
                    <div class="container-slide">

                    </div>
                    
                    <div class="outer">

                        <div class="details de-v-h-center">
                            <h1>Make no bad choices, choose us.</h1>
                            <p class="subtitle mt-2 has-text-white">
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
