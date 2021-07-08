import React from 'react' 
import { Link, withRouter } from 'react-router-dom' 
 
import './../../css/bstyle.css'

const FooterComponent = function(props) { 
    
    return (
        <> 
           <section class="hero notification is-primary">
            <div class="container my-6">
              <footer class="columns">

                <div class="column is-3">
                  <h2 class="title is-4 has-text-dark">  
                      Bisho Bhasha School 
                      & Consultancy 
                  </h2>

                  <p class="subtitle is-6 is-unselectable">
                    <a class="button is-text is-primary">Bisho Bhasha Team</a><br /> 
                    <a class="button is-text is-primary">FAQ</a><br />
                    <a class="button is-text is-primary">Contact Us</a><br /> 
                    <a class="button is-text is-primary">How to Use the website</a><br />
                    <a class="button is-text is-primary">Join our chatroom (Discord)</a><br />
                    <a class="button is-text is-primary">Group Membership discount</a><br />                    
                  </p> 
                </div>

                <div class="column is-3">
                  <h2 class="title is-4">
                    <strong class="is-uppercase has-text-dark">Learning Center</strong>
                  </h2>
                  <p class="subtitle is-6 is-unselectable"> 
                    <a class="button is-text is-primary">Test Your Korean</a><br />  
                    <a class="button is-text is-primary">My Learning Center</a><br />  
                    <a class="button is-text is-primary">Courses</a><br />  
                    <a class="button is-text is-primary">Bookstore</a><br />  
                    <a class="button is-text is-primary">My Account</a><br />  
                    <a class="button is-text is-primary">Book Audio</a><br />  
                    <a class="button is-text is-primary">DownloadApp</a><br />  
                  </p>
                </div>

                
                <div class="column is-6">
                  <h2 class="title is-4 has-text-dark">
                    SUBSCRIBE TO BISHOBHASHA NEWSLETTER  
                  </h2>  
                  <p class="subtitle is-6 is-unselectable">
                    <br/> 
                    Receive our latest updates about upcoming
                    sale, courses and books before anyone else﻿! 
                  </p>                  
               
                  <article class="field has-addons is-expanded">
                    <div class="control has-icons-left" > 
                      <input class="input is-rounded mr-6 is-unselectable" type="email" placeholder="Your email address" />
                      <span class="icon is-medium is-left">
                        <i class="fas fa-envelope has-text-link"></i>
                      </span>
                    </div>
                    <div class="control">
                      <a class="button is-link is-rounded is-fullwidth" >
                        Subscribe
                      </a>
                    </div>
                  </article>

                </div>
              </footer>
            </div>
          </section> 
         
        </>  
    )
}

export default withRouter(FooterComponent)
