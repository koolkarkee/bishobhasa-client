import React from 'react' 
import { withRouter } from 'react-router-dom' 


const path1 = "/assets/images/our-services/language.jpg" 
const path2 = "/assets/images/our-services/training.jpg" 
const path3 = "/assets/images/our-services/tuition.jpg" 

const ServiceImage = (props) => {
    if(props.order === "1"){
        return (
          <img src={process.env.PUBLIC_URL+ path1} alt={process.env.PUBLIC_URL+ path1} /> 
        )
      } 
    
      if(props.order === "2"){
        return (
          <img src={process.env.PUBLIC_URL+ path2} alt={process.env.PUBLIC_URL+ path2} /> 
        )
      } 
    
      if(props.order === "3"){
        return (
          <img src={process.env.PUBLIC_URL+ path3} alt={process.env.PUBLIC_URL+ path3} /> 
        )
      } 
}


const ServiceComponent = function(props) { 
    
    return (
        <> 
           <section class="hero is-light pt-6" id="services">

                <div class="container has-text-centered">
                    
                    <article class="d-article">
                        <h2 class="title mb-5 has-text-primary">Our Services</h2>
                    </article>
                </div> 

                <div class="container de-container">
                
                <div class="de-card">
                    <div class="imgBx">
                        <ServiceImage order="1" />
                    </div>
                    <div class="de-content">
                        <h2 class="title has-text-centered">Languages</h2>
                        <p class="subtitle is-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dicta deleniti amet hic quae ex. Voluptatum beatae aliquam molestias modi repellat provident exercitationem, consequuntur quae aspernatur. Dolorem quos adipisci voluptatem?</p>
                    </div>
                </div>

                <div class="de-card">
                    <div class="imgBx">
                        <ServiceImage order="2" />
                    </div>
                    <div class="de-content">
                        <h2 class="title has-text-centered">Trainings</h2>
                        <p class="subtitle is-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dicta deleniti amet hic quae ex. Voluptatum beatae aliquam molestias modi repellat provident exercitationem, consequuntur quae aspernatur. Dolorem quos adipisci voluptatem?</p>
                    </div>
                </div>

                <div class="de-card">
                    <div class="imgBx"> 
                        <ServiceImage order="3" />
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
