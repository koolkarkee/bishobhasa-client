import React from 'react' 
import { Link, withRouter } from 'react-router-dom' 
import { SvgIcon } from '@material-ui/core'

import './header.component.css'
// import './../../../css/bstyle.css' 

const SiteLogo = () => { 
  return (
    <Link to="/index" >   
        <img src={process.env.PUBLIC_URL+"/assets/images/brand-logo/png/brand-logo.png"} />
    </Link> 
  )
}
 
// const Logout = (history) => {
//     localStorage.clear()
//     history.push('/login')
// } 

const Header = function(props) { 
    console.log('isLoggedUser >> ', props.isLoggedUser)

    // let menu = props.isLoggedUser 
    // ?
    // <ul className="ul">
    //     <li className="nav-item">
    //         <a href="#default" className="logo">DegoX</a> 
    //     </li>
    //     <li className="nav-item">
    //         <Link to="/">Home</Link>
    //     </li>
    //     <li className="nav-item">
    //         <Link to="/about">About Us</Link>
    //     </li>
    //     <li className="nav-item">
    //         <Link to="/blog">Blog</Link>
    //     </li> 
    //     <li className="nav-item">
    //         <Link to="/contact">Contact</Link>
    //     </li>  
    //     <li className="nav-item"> 
    //         <Link to="/login" onClick={ () => Logout(props.history)}>Logout</Link>
    //     </li> 
    // </ul>
    // :
    // <ul className="ul">
    //     <li className="nav-item">
    //         <a href="#default" className="logo">DegoX</a> 
    //     </li>
    //     <li className="nav-item">
    //         <Link to="/">Home</Link>
    //     </li>
    //     <li className="nav-item">
    //         <Link to="/about">About Us</Link>
    //     </li>
    //     <li className="nav-item">
    //         <Link to="/blog">Blog</Link>
    //     </li> 
    //     <li className="nav-item">
    //         <Link to="/contact">Contact</Link>
    //     </li>  
    //     <li className="nav-item">
    //         <Link to="/login">Login</Link>
    //     </li> 
    // </ul>

    return (
        <> 
            <header class="de-stickey">
               <section class="top-nav">
                <div class="d-playstore">
                  <figure class="d-playstore-img">
                    <i class="fab fa-google-play mr-1"></i>
                  </figure>
                  <a href="#">
                    <span>
                       Download our APP
                    </span>
                  </a> 		
                </div> 
                
                <div class="d-log-in-out">
                  <div class="d-log-in-out-ne">
                    <figure class="d-login-img">
                      <Link to="#"><i class="fas fa-sign-in-alt mr-1"></i></Link>
                    </figure>
                    <a href="#"><span>
                        LOGIN | SIGNUP
                      </span></a>
                  </div>
                </div>
              </section>

              <nav class="navbar is-primary is-fixed-top-degox"> 

                <div class="container" style={{height:1}}> 

                  <div class="d-brand-logo">
                     <SiteLogo /> 
                  </div>
 
                  <div class="navbar-brand is-pulled-right" >
                    <span class="navbar-burger burger" data-target="navMenu">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div> 

                  <div id="navMenu" class="navbar-menu">
                    <div class="navbar-end">
                      {/* <Link to="/" id="homeMenu" class="navbar-item">Home</Link> */}
                      <Link to="About" class="navbar-item">About Us</Link>
                      <Link to="Services" class="navbar-item">Services</Link>
                     
                      <Link to="Channel" class="navbar-item">Channel</Link>
                      <Link to="Testimonial" class="navbar-item">Testimonial</Link>
                      <Link to="Leveltest" class="navbar-item">Level Test</Link>
                      <Link to="Bookstore" class="navbar-item">Bookstore</Link>
                    </div>
                  </div>

                </div>
                
              </nav>

            
          </header> 
           
        </>  
    )
}

export default withRouter(Header)
