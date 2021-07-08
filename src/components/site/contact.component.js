import React from 'react' 
import { Link, withRouter } from 'react-router-dom' 
 
import './../../css/bstyle.css'

import serviceImage from './../../images/our-services/svg/our-services.jpg'

const ContactComponent = function(props) { 
    
    return (
        <> 
          <section class="hero notification is-dark">
            <div class="container my-3">
              
              <h2 class="title has-text-centered has-text-light">Contact Us</h2>
              <p class="subtitle has-text-centered has-text-light mt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, molestias! 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, molestias! 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, molestias! 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, molestias! 
              </p>

              <div class="container"> 
               
                <div class="columns is-variable is-8">

                  <div class="column is-one-fifths">
                    <p class="is-hidden">
                      hidden column to manage space
                    </p>
                  </div>

                  <div class="column is-two-fifths">

                    <p class="subtitle is-size-1">
                      <div class="columns is-gapless is-mobile">
                        <div class="column is-1">
                          <span class="mt-1 has-text-right is-size-4">
                            <i class="fa fa-map-marker-alt has-text-primary pl-2"></i> 
                          </span>
                        </div>
                        <div class="hr-break-contact ml-5 column is-11">
                          <h2 class="is-unselectable mb-3 is-size-6 mt-4">Chabahil-7, Kathmandu Nepal</h2>
                          <hr style={{width:250}} />
                        </div>
                      </div> 
                    </p> 

                    
                    <p class="subtitle is-size-1">
                      <div class="columns is-gapless is-mobile">
                        <div class="column is-1">
                          <span class="mt-1 has-text-right is-size-4">
                            <i class="fas fa-phone-alt has-text-primary pl-2"></i> 
                          </span>
                        </div>
                        <div class="hr-break-contact ml-5 column is-11">
                          <h2 class="is-unselectable mb-3 is-size-6 mt-4">+977-9803645581</h2>
                          <hr style={{width:250}} />
                        </div>
                      </div> 
                    </p> 

                    
                    <p class="subtitle is-size-1">
                      <div class="columns is-gapless is-mobile">
                        <div class="column is-1">
                          <span class="mt-1 has-text-right is-size-4">
                            <i class="fas fa-envelope-open-text has-text-primary pl-2"></i> 
                          </span>
                        </div>
                        <div class="hr-break-contact ml-5 column is-11">
                          <h2 class="is-unselectable mb-3 is-size-6 mt-4">bishobhashaschool@gmail.com</h2>
                          <hr style={{width:250}} />
                        </div>
                      </div> 
                    </p> 
  
                  </div>

                  <div class="column is-two-fifths"> 
                    <form method="POST" class="field"> 
                        <div class="control block"> 
                          <input required class="input is-unselectable" type="text" placeholder="Enter your full name" />                        
                        </div> 
                        <div class="control block">
                          <input required class="input is-unselectable" type="email" placeholder="Enter your email" />
                        </div>
                        <div class="control block">
                          <input required class="input is-unselectable" type="number" placeholder="Enter your number" />
                        </div> 
                        <div class="control block">
                          <textarea required class="textarea is-unselectable" placeholder="Enter your message"></textarea>
                        </div>
                        <div class="control block">
                          <a class="button is-primary" type="submit">Send Message</a>
                        </div>
                    </form>
                  </div>

                  <div class="column is-one-fifths">
                    <p class="is-hidden">
                      hidden column to manage space
                    </p>
                  </div>

                </div> 
              </div>

            </div>
          </section>
         
        </>  
    )
}

export default withRouter(ContactComponent)