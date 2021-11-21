import React from 'react' 
import { withRouter, Link } from 'react-router-dom' 
 
const BishoBhasaConsultancySection = () => {
  return(
    <>
      <h2 class="title is-4 has-text-dark">  
          Bisho Bhasha School 
          & Consultancy 
      </h2>

       <p class="subtitle is-6 is-unselectable">        
          <button class="button is-text is-primary"><Link to="/Team"> Bishobhasa Team </Link></button><br />        
          <button class="button is-text is-primary"><Link to="/faq"> FAQ </Link></button><br />         
          <button class="button is-text is-primary"><Link to="/Contact"> Contact Us </Link></button><br />       
          <button class="button is-text is-primary">
            <a href="https://portal.termshub.io/bishobhasa.com/website_tos/" target="_blank">
              Terms and Condtions 
            </a>
          </button><br />  
      </p>  
    </>
  )
}

const LearningCenterSection = () => {
  return(
    <>
      <h2 class="title is-4">
        <strong class="has-text-dark">Learning Center</strong>
      </h2>
      <p class="subtitle is-6 is-unselectable"> 
        <button class="button is-text is-primary"><Link to="/"> Test Your Korean </Link> </button><br /> 
        
        <button class="button is-text is-primary"><Link to="/"> My Learning Center </Link></button><br />  
      
        <button class="button is-text is-primary"><Link to="/"> Courses</Link></button><br />  
      
        <button class="button is-text is-primary"><Link to="/"> Bookstore </Link></button><br />  
      
        <button class="button is-text is-primary"><Link to="/"> My Account </Link></button><br />  
      
        <button class="button is-text is-primary"><Link to="/"> Book Audio </Link></button><br />  
        
        <button class="button is-text is-primary"><Link to="/"> Download App </Link></button><br />   
              
      </p>
    </>
  )
}

const SubscribeToNewsletterSection = () => {
  return (
    <>
      <h2 class="title is-4 has-text-dark">
        Subscribe to Bishobhasa newsletter   
      </h2>  
      <p class="subtitle is-6 is-unselectable">
        <br/> 
        Receive our latest updates about upcoming
        sale, courses and books before anyone else﻿! 
      </p>                  
    
      <article class="field has-addons is-expanded">
        <div class="control has-icons-left" > 
          <input class="input is-rounded mr-6 is-unselectable has-text-dark" type="email" placeholder="Your email address" />
          <span class="icon is-medium is-left">
            <i class="fas fa-envelope has-text-primary"></i>
          </span>
        </div>
        <div class="control">
          <button class="button is-link is-rounded is-fullwidth" >
             Subscribe
          </button>
        </div>
      </article> 
    </>
  )
}

const FooterComponent = function(props) { 
    
    return (
        <> 
           <section class="hero notification is-primary" style={{opacity:0.92}}>
            <div class="container my-2">
              <footer class="columns">

                <div class="column is-3"> 
                  <BishoBhasaConsultancySection/>
                </div>

                <div class="column is-3"> 
                  <LearningCenterSection />
                </div> 
                
                <div class="column is-6">
                  <SubscribeToNewsletterSection />
                </div>

              </footer>
            </div>
          </section> 

          <section class="hero">
            <div class="copywrite">
                <div class="container">
                  <div class="columns is-vcentered">
                    <div class="column is-12">
                      <p class="subtitle is-6 is-unselectable has-text-centered">
                        <strong>
                           Copyright &copy; Bishwo Bhasha School 2019 
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </section>
         
        </>  
    )

}

export default withRouter(FooterComponent)
