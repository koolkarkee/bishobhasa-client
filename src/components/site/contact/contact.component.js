import React, { useEffect } from 'react' 
import { withRouter } from 'react-router-dom' 
 
// import './../../css/bstyle.css'

//import serviceImage from './../../images/our-services/svg/our-services.jpg'

const ContactComponent = function(props) { 
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    
    return (
        <> 
          <section class="hero notification is-light mb-0">
            <div class="container my-2">
              
              <h2 class="title has-text-centered has-text-primary">Contact Us</h2>
              
              <p class="has-text-justified is-size-6 mx-5 mb-6">
                  Need more information? Please fill out the form and we will get in touch soon  
              </p>
              
              <div class="container is-dark"> 
               
                <div class="columns is-variable is-8">
                   
                  <div class="column is-three-fifths">

                    <div class="subtitle is-size-1">
                      <div class="columns is-gapless is-mobile">
                        <div class="column is-1">
                          <span class="mt-1 has-text-right is-size-4">
                            <i class="fa fa-map-marker-alt has-text-primary pl-2"></i> 
                          </span>
                        </div>
                        <div class="hr-break-contact ml-5 column is-11">
                          <h2 class="is-unselectable mb-3 is-size-6 mt-4">
                            Level-5, Charumati Bhawan, <br/> 
                            Chabahil-7, Kathmandu Nepal
                          </h2>
                          <hr style={{width:250}} />
                        </div>
                      </div> 
                    </div> 
 
                    <div class="subtitle is-size-1">
                      <div class="columns is-gapless is-mobile">
                        <div class="column is-1">
                          <span class="mt-1 has-text-right is-size-4">
                            <i class="fas fa-phone-alt has-text-primary pl-2"></i> 
                          </span>
                        </div>
                        <div class="hr-break-contact ml-5 column is-11">
                          <h2 class="is-unselectable mb-3 is-size-6 mt-4">+977 1 4813 102</h2>
                          <hr style={{width:250}} />
                        </div>
                      </div> 
                    </div>  
 
                    <div class="subtitle is-size-1">
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
                    </div>  
  
                  </div>

                  <div class="column is-three-fifths"> 
                    <form method="POST" class="field"> 
                        <div class="control block"> 
                          <input required class="input is-hovered is-unselectable" 
                              type="text" placeholder="Enter your full name" 
                              pattern="[a-zA-Z0-9]+"
                              minLength="4" maxLength="50"
                          />                        
                        </div> 
                        <div class="control block">
                          <input required class="input is-hovered is-unselectable" 
                              type="email" 
                              placeholder="Enter your email" 
                              minLength="5" maxLength="50"
                         />
                        </div>
                        <div class="control block">
                          <input required class="input is-hovered is-unselectable" 
                              type="text" placeholder="Enter your subject" 
                              minLength="5" maxLength="50"
                          />
                        </div>
                        <div class="control block">
                          <input required class="input is-hovered is-unselectable" 
                              type="text" placeholder="Enter your number"
                              pattern="[0-9]+"
                              size="10"  minLength="10"
                          />
                        </div> 
                        <div class="control block">
                          <textarea required class="textarea is-hovered is-unselectable" 
                              placeholder="Enter your message"></textarea>
                        </div>
                        <div class="control block">
                          <button class="button is-link" type="submit">Send Message</button>
                        </div>
                    </form>
                  </div>
 
                </div> 
              </div>

            </div>
          </section> 
          <section class="hero notification is-light mb-0 px-5 mx-5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8659119985573!2d85.34401771412003!3d27.721426031482064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1965a381634d%3A0xffd4205d0a82a2b!2sCharumati%20Bhawan%2C%20Gopikrishna%2C%20Ring%20Road%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1637638871639!5m2!1sen!2snp" 
                height="400" loading="lazy" 
                title="bishobhasamap"
                style={{border:1}}
                ></iframe>  
          </section>
        </>  
    )
}

export default withRouter(ContactComponent)
