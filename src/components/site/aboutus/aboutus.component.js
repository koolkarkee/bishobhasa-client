import React from 'react' 
import { withRouter } from 'react-router-dom' 

const AboutUsComponent = function(props) {  
    
    return (
        <>  
          <section class="hero is-light" id="About-us">
              <div class="container block">

              <h1 class="title is-size-2 my-3 has-text-centered has-text-primary mt-5">About Us</h1>
                      <p class="has-text-justified is-size-6 mx-5">
                        We are legally registered educational institution under the Nepal government policy and act in 2019,
                        located in Kathmandu Metropolitan city Chabahil – 7 Gopikrishna Nagar. Our prime objectives are teaching
                          various languages, job orientation and skill development trainings and abroad study counselling, documentation and processing. We have a very qualified and more than 5 to 10 years of experienced teams to offer you the above mention services.
                      </p>
                  <br /> 
              </div>  
              <br />
          </section> 
        </>  
    )
}

export default withRouter(AboutUsComponent)
