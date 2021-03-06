import React from 'react'
import { withRouter } from 'react-router-dom'
  
const path1 = "/assets/images/testimonials/1.jpg" 

const StudentImage = () => { 
    return (
        <img class="is-unselectable" src={process.env.PUBLIC_URL+path1} alt={process.env.PUBLIC_URL+path1} />
    )
}

const TestimonialComponent = function(props) { 
    
    return (
        <>  
            <section class="hero is-light" id="Testimonial">
                <div class="container">

                    <div class="block">
                        <h1 class="title is-size-2 my-3 has-text-centered has-text-primary mt-5">Student's Voice</h1>
                        <p class="has-text-justified is-size-6 mx-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. centuries,
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. centuries,
                        </p>
                    </div>

                    <div class="block">
                        <div class="columns">
                            <div class="column is-6">

                                <div class="has-background-primary" style={{opacity:0.92}}>
                                    <p class="is-invisible pb-3"> 
                                        just a box filled with color <br/> 
                                        just a box filled with color <br/> 
                                    </p> 
                                </div>

                                <div class="hr-break">    
                                    <h2 class="title pt-5 pl-5 mb-3 has-background-light"> Carla Stevens </h2>  
                                    
                                    <h2 class="title is-size-5 pl-5 pb-1 mt-2 has-background-light">Korean Student</h2>
                                    <article class="pl-5 pr-5 has-background-light has-text-justified">  
                                        <p>
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. centuries,
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type  
                                        </p>
                                    </article>  
                                </div>   
                            </div>
 
                            <div class="column is-6">
                                 <div class="has-background-primary">
                                    <figure class="image"> 
                                        <StudentImage />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                

                </div>
            </section> 
 
        </>  
    )
}

export default withRouter(TestimonialComponent)
