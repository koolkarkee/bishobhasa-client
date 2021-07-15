import React from 'react' 
import { withRouter, Link } from 'react-router-dom' 
 
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

const MemberProfile = () => {
  return (
    <>
       <article class="column is-4 mb-6">
            <div class="de-box">
              <div class="de-imgBx">
                <MemberImage /> 
              </div>
              <ul class="social-icon"> 
                  <li>
                     <Link to="https://www.facebook.com/degox.solutions"> <i class="fab fa-facebook-f"></i></Link> 
                  </li>
                  <li>
                     <Link to="https://www.facebook.com/degox.solutions"> <i class="fab fa-linkedin-in"></i></Link> 
                  </li>
                  <li>
                     <Link to="https://www.facebook.com/degox.solutions"> <i class="fab fa-instagram"></i></Link> 
                  </li> 
              </ul>
              <div class="de-details">
                  <h2>
                    Mr. Sherpa Wangdi <br />
                    <span>Vice-Chairman</span> 
                  </h2>  
              </div>
            </div>
       </article>
    </>
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

                <h1 class="title is-size-2 my-3 has-text-centered has-text-primary mt-5">About Us</h1>
                        <p class="has-text-justified is-size-6 mx-5">
                          We are legally registered educational institution under the Nepal government policy and act in 2019,
                          located in Kathmandu Metropolitan city Chabahil – 7 Gopikrishna Nagar. Our prime objectives are teaching
                           various languages, job orientation and skill development trainings and abroad study counselling, documentation and processing. We have a very qualified and more than 5 to 10 years of experienced teams to offer you the above mention services.
                        </p>
                    <br />
                    <h2 class="title is-4 has-text-primary mx-5 has-text-centered">
                        The founders of Bishobhasa School & Consultancy | Team Members
                    </h2> 
                </div>  
                <br />
            </section>
          
          <section class="hero is-light">
            <div class="container px-5">
              <div class="columns is-multiline is-variable is-3">
                     <MemberProfile />
                     <MemberProfile />
                     <MemberProfile />
                     <MemberProfile />
                     <MemberProfile />
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
