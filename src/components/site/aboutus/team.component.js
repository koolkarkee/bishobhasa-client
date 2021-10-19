import React, {useEffect} from 'react' 
import { withRouter, Link } from 'react-router-dom' 
 
// import './../../css/bstyle.css'

// import sherpaImage from './../../images/about-us/sherpa.jpg' 
// import krishnaImage from './../../images/about-us/krishna.jpg' 
// import hyalmoImage from './../../images/about-us/hyolmo.jpg'
// import bibekImage from './../../images/about-us/bibek.jpg'
// import dharmaImage from './../../images/about-us/dharma.jpg'  


const MemberImage = (props) => { 
  if(props.order === "1"){
    return (
      <SherpaImage />
    )
  } 

  if(props.order === "2"){
    return (
      <HyalmoImage />
    )
  } 

  if(props.order === "3"){
    return (
      <KrishnaImage />
    )
  } 

  if(props.order === "4"){
    return (
      <BibekImage />
    )
  } 

  if(props.order === "5"){
    return (
      <DharmaImage />
    )
  } 

}

const MemberProfile = (props) => {
  return (
    <>
       <article class="column is-4 mb-6">
            <div class="de-box">
              <div class="de-imgBx"> 
                <MemberImage order={props.order} />
              </div>
              <ul class="social-icon"> 
                  <li>
                     <Link to={{ pathname: props.facebook }} target="_blank"> <i class="fab fa-facebook-f"></i></Link> 
                  </li>
                  <li>
                     <Link to={{ pathname: props.linkedin }} target="_blank"> <i class="fab fa-linkedin-in"></i></Link> 
                  </li>
                  <li>
                     <Link to={{ pathname: props.instagram }} target="_blank"> <i class="fab fa-instagram"></i></Link> 
                  </li> 
              </ul>
              <div class="de-details">
                  <h2>
                    {props.name } <br />
                    <span>{props.position}</span> 
                  </h2>  
              </div>
            </div>
       </article>
    </>
  )
}


const SherpaImage = () => { 
  return (
      <img src={process.env.PUBLIC_URL+"/assets/images/about-us/sherpa.jpg"} alt={process.env.PUBLIC_URL+"/assets/images/about-us/sherpa.jpg"} /> 
  )
}

const HyalmoImage = () => {
   return (
      <img src={process.env.PUBLIC_URL+"/assets/images/about-us/hyolmo.jpg"} alt={process.env.PUBLIC_URL+"/assets/images/about-us/hyolmo.jpg"} /> 
  )
}
 
const KrishnaImage = () => {
   return (
      <img src={process.env.PUBLIC_URL+"/assets/images/about-us/krishna.jpg"} alt={process.env.PUBLIC_URL+"/assets/images/about-us/krishna.jpg"} /> 
  )
} 

const BibekImage = () => {
  return (
     <img src={process.env.PUBLIC_URL+"/assets/images/about-us/bibek.jpg"} alt={process.env.PUBLIC_URL+"/assets/images/about-us/bibek.jpg"} /> 
 )
} 

const DharmaImage = () => {
  return (
     <img src={process.env.PUBLIC_URL+"/assets/images/about-us/dharma.jpg"} alt={process.env.PUBLIC_URL+"/assets/images/about-us/dharma.jpg"} /> 
 )
} 
 
const AboutTeamComponent = function(props) {  
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
        <>  
            <section class="hero is-light" id="About-us">
                <div class="container block">

                    <h1 class="title is-size-2 my-3 has-text-centered has-text-primary mt-5"> </h1>
                       
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
                     <MemberProfile  
                              order = "1" 
                              facebook="https://www.facebook.com/profile.php?id=100002431209867" 
                              linkedin="#"
                              instagram="#"
                              name="Mr. Sherpa Wangdi" 
                              position="Board Member" />
                     <MemberProfile 
                              order = "2"
                              facebook="#" 
                              linkedin="#"
                              instagram="#"
                              name="Ms. Hyolmo Phurdiki" 
                              position="Board Member" />
                     <MemberProfile 
                              order = "3"
                              facebook="http://www.facebook.com/krhna.lama" 
                              linkedin="#"
                              instagram="#"
                              name="Mr. Krishna Kumar Lama" 
                              position="Founder/CEO" />
                     <MemberProfile 
                              order = "4"
                              facebook="http://www.facebook.com/carcii.bib" 
                              linkedin="http://www.linkedin.com/in/koolkarkee"
                              instagram="https://www.instagram.com/carcii.bib/"
                              name="Mr. Bibek Karki" 
                              position="IT Support" />
                     <MemberProfile   
                              order = "5"
                              facebook="http://www.facebook.com/dukebal" 
                              linkedin="http://www.linkedin.com/in/dharma-raj-lama"
                              instagram="https://www.instagram.com/dezinerdharma/"
                              name="Mr. Dharma Raj Lama" 
                              position="IT Support" /> 
              </div>
            </div>
          </section>
           
          <section class="hero is-light">
            <p class="is-invisible my-3">hidden</p>
          </section>
        </>  
    )
}

export default withRouter(AboutTeamComponent)
