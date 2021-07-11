import React from 'react' 
import { withRouter } from 'react-router-dom' 
 
// import './../../css/bstyle.css'

// import sherpaImage from './../../images/about-us/sherpa.jpg' 
// import krishnaImage from './../../images/about-us/krishna.jpg' 
// import hyalmoImage from './../../images/about-us/hyolmo.jpg'
// import bibekImage from './../../images/about-us/bibek.jpg'
// import dharmaImage from './../../images/about-us/dharma.jpg'


const MemberImage = () => { 
  return (
      <img src={process.env.PUBLIC_URL+"/assets/images/about-us/sherpa.jpg"} alt={process.env.PUBLIC_URL+"/assets/images/about-us/sherpa.jpg"} /> 
  )
}

// const sherpaImage = () => {
//   return process.env.PUBLIC_URL+"/assets/images/about-us/sherpa.jpg"
// }
 
// const krishnaImage = () => {
//   return process.env.PUBLIC_URL+"/assets/images/about-us/sherpa.jpg"
// }
// const hyalmoImage = () => {
//   return process.env.PUBLIC_URL+"/assets/images/about-us/sherpa.jpg"
// }
// const bibekImage = () => {
//   return process.env.PUBLIC_URL+"/assets/images/about-us/sherpa.jpg"
// }
// const dharmaImage = () => {
//   return process.env.PUBLIC_URL+"/assets/images/about-us/sherpa.jpg"
// }

const AboutUsComponent = function(props) {  
    
    return (
        <>  
            <section class="hero is-light" id="About-us">
                <div class="container block">
                    <h2 class="title mt-2 has-text-primary has-text-centered">About Us</h2> 
                    <article class="subtitle is-6 has-text-justified mx-5">
                        We are legally registered educational institution under the Nepal government policy and act in 2019, located in Kathmandu Metropolitan city Chabahil – 7 Gopikrishna Nagar. Our prime objectives are teaching various languages, job orientation and skill development trainings and abroad study counselling, documentation and processing. We have a very qualified and more than 5 to 10 years of experienced teams to offer you the above mention services.
                    </article> 
                    <br />
                    <h2 class="title is-4 has-text-primary mx-5 has-text-centered">
                        The founders of Bishobhasa School & Consultancy | Team Members
                    </h2> 
                </div>  
                <br />
            </section>
          
          <section class="hero is-light">
            <div class="container">
              <div class="columns is-multiline is-variable is-3">
                    
                  <article class="column is-4">
                    <div class="de-box">
                      <div class="de-imgBx">
                        <MemberImage /> 
                      </div>
                      <ul class="social-icon"> 
                          <li><a href="https://www.facebook.com/degox.solutions"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                      <div class="de-details">
                          <h2>
                            Mr. Sherpa Wangdi <br />
                            <span>Vice-Chairman</span> 
                          </h2>  
                      </div>
                    </div>
                  </article>

                  <article class="column is-4">
                    <div class="de-box">
                      <div class="de-imgBx">
                        <MemberImage /> 
                      </div>
                      <ul class="social-icon"> 
                          <li><a href="https://www.facebook.com/degox.solutions"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                      <div class="de-details">
                          <h2>
                            Mr. Lama Kumar Krishna <br />
                            <span>Chairman</span> 
                          </h2>  
                      </div>
                    </div>
                  </article>

                  <article class="column is-4">
                    <div class="de-box">
                      <div class="de-imgBx">
                          <MemberImage /> 
                      </div>
                      <ul class="social-icon"> 
                          <li><a href="https://www.facebook.com/degox.solutions"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                      <div class="de-details">
                          <h2>
                            Ms. Hyolmo Phurdiki <br />
                            <span>Admin Head</span> 
                          </h2>  
                      </div>
                    </div>
                  </article>

                  <article class="column is-4">
                    <div class="de-box">
                      <div class="de-imgBx">
                        <MemberImage /> 
                      </div>
                      <ul class="social-icon"> 
                          <li><a href="https://www.facebook.com/degox.solutions"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                      <div class="de-details">
                          <h2>
                            Mr. Bibek Karki <br />
                            <span>Senior Software Engineer</span> 
                          </h2>  
                      </div>
                    </div>
                  </article>

                  <article class="column is-4">
                <div class="de-box">
                  <div class="de-imgBx">
                    <MemberImage /> 
                  </div>
                  <ul class="social-icon"> 
                      <li><a href="https://www.facebook.com/degox.solutions"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                  </ul>
                  <div class="de-details">
                      <h2>
                        Mr. Dharma Raj Lama <br />
                        <span>Senior Graphic Designer</span> 
                      </h2>  
                  </div>
                </div>
              </article>
  
              </div>
            </div>
          </section>
           
          <section class="hero is-light">
            <p class="is-invisible my-3">hidden</p>
          </section>
        </>  
    )
}

export default withRouter(AboutUsComponent)