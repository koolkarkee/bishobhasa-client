import React from 'react' 
import { withRouter } from 'react-router-dom' 

const ServiceImage = () => {
    return (
        <img src={process.env.PUBLIC_URL+"/assets/images/our-services/svg/our-services.jpg"} alt={process.env.PUBLIC_URL+"/assets/images/our-services/svg/our-services.jpg"} /> 
    )
}


const ServiceComponent = function(props) { 
    
    return (
        <> 
           <section class="hero is-light" id="services">

                <div class="container has-text-centered">
                    
                    <article class="d-article">
                        <h2 class="title mt-2 mb-3 has-text-primary">Our Services</h2>
                    </article>
                </div> 

                <div class="container de-container">
                
                <div class="de-card">
                    <div class="imgBx">
                        <ServiceImage />
                    </div>
                    <div class="de-content">
                        <h2 class="title has-text-centered">languages</h2>
                        <p class="subtitle is-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dicta deleniti amet hic quae ex. Voluptatum beatae aliquam molestias modi repellat provident exercitationem, consequuntur quae aspernatur. Dolorem quos adipisci voluptatem?</p>
                    </div>
                </div>

                <div class="de-card">
                    <div class="imgBx">
                        <ServiceImage />
                    </div>
                    <div class="de-content">
                        <h2 class="title has-text-centered">Trainings</h2>
                        <p class="subtitle is-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dicta deleniti amet hic quae ex. Voluptatum beatae aliquam molestias modi repellat provident exercitationem, consequuntur quae aspernatur. Dolorem quos adipisci voluptatem?</p>
                    </div>
                </div>

                <div class="de-card">
                    <div class="imgBx"> 
                        <ServiceImage />
                    </div>
                    <div class="de-content">
                        <h2 class="title has-text-centered">Tuitions</h2>
                        <p class="subtitle is-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dicta deleniti amet hic quae ex. Voluptatum beatae aliquam molestias modi repellat provident exercitationem, consequuntur quae aspernatur. Dolorem quos adipisci voluptatem?</p>
                    </div>
                </div>    
                

            </div> 

            </section> 

        </>  
    )
}

export default withRouter(ServiceComponent)
