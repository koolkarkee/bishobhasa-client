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
                        {/* <h2 class="title has-text-centered pb-3">Languages</h2>  */}
                        <div class="subtitle is-6">
                            <aside class="menu">
                                <p class="menu-label has-text-primary has-text-weight-bold">
                                    Languages
                                </p> 
                                <ul class="menu-list ml-2">
                                    <li class="pb-1">Korean (EPS)</li>
                                    <li class="pb-1">Japanese</li>
                                    <li class="pb-1">English</li>
                                    <li class="pb-1">Chinese</li>
                                    <li class="pb-1">Germany</li>
                                    <li class="pb-1">Nepali</li> 
                                </ul>
                            </aside> 
                        </div>
                        {/* <p class="subtitle is-6">
                                View More
                        </p> */}
                    </div>
                </div>

                <div class="de-card">
                    <div class="imgBx">
                        <ServiceImage order="2" />
                    </div>
                    
                    <div class="de-content">
                        <div class="subtitle is-6">
                                <aside class="menu">
                                    <p class="menu-label has-text-primary has-text-weight-bold">
                                        Trainings
                                    </p> 
                                    <ul class="menu-list ml-2">
                                        <li class="pb-1">EPS Skill Test </li>
                                        <li class="pb-1"> Caregiver </li>
                                        <li class="pb-1">Other Foreign Employment </li>
                                        <li class="pb-1">Job Orientation Trainings</li> 
                                    </ul>
                                </aside> 
                        </div>
                    </div> 
                </div>

                <div class="de-card">
                    <div class="imgBx"> 
                        <ServiceImage order="3" />
                    </div>
                    <div class="de-content"> 
                      <div class="subtitle is-6">
                            <aside class="menu">
                                <p class="menu-label has-text-primary has-text-weight-bold">
                                    Abroad Study 
                                </p> 
                                <ul class="menu-list ml-2">
                                    <li class="pb-1">South Korea</li>
                                    <li class="pb-1"> Japan </li>
                                    <li class="pb-1">USA </li>
                                    <li class="pb-1">Australia</li> 
                                    <li class="pb-1">China</li> 
                                </ul>
                            </aside> 
                        </div>
                    </div> 
                </div>    
                

            </div> 

            </section> 

        </>  
    )
}

export default withRouter(ServiceComponent)
