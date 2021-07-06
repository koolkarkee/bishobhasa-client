import React from 'react' 
import { Link, withRouter } from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'

import './header.component.css'
import './../../../css/bstyle.css'
 
const Logout = (history) => {
    localStorage.clear()
    history.push('/login')
}

const Header = function(props) {
    console.log('isLoggedUser >> ', props.isLoggedUser)
    let menu = props.isLoggedUser 
    ?
    <ul className="ul">
        <li className="nav-item">
            <a href="#default" className="logo">DegoX</a> 
        </li>
        <li className="nav-item">
            <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link to="/about">About Us</Link>
        </li>
        <li className="nav-item">
            <Link to="/blog">Blog</Link>
        </li> 
        <li className="nav-item">
            <Link to="/contact">Contact</Link>
        </li>  
        <li className="nav-item"> 
            <Link to="/login" onClick={ () => Logout(props.history)}>Logout</Link>
        </li> 
    </ul>
    :
    <ul className="ul">
        <li className="nav-item">
            <a href="#default" className="logo">DegoX</a> 
        </li>
        <li className="nav-item">
            <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link to="/about">About Us</Link>
        </li>
        <li className="nav-item">
            <Link to="/blog">Blog</Link>
        </li> 
        <li className="nav-item">
            <Link to="/contact">Contact</Link>
        </li>  
        <li className="nav-item">
            <Link to="/login">Login</Link>
        </li> 
    </ul>

    return (
        <>  
            {/* <AppBar>
                <Toolbar position="sticky">
                    {menu}
                </Toolbar>
            </AppBar> */}

            <header class="de-stickey">
               <section class="top-nav">
                <div class="d-playstore">
                  <figure class="d-playstore-img">
                    <i class="fab fa-google-play mr-1"></i>
                  </figure>
                  <a href="www.google.com">
                    <span>
                       Download our APP
                    </span>
                  </a> 		
                </div>
                
                <div class="d-log-in-out">
                  <div class="d-log-in-out-ne">
                    <figure class="d-login-img">
                      <a href="#"><i class="fas fa-sign-in-alt mr-1"></i></a>
                    </figure>
                    <a href="#"><span>
                        LOGIN | SIGNUP
                      </span></a>
                  </div>
                </div>
              </section>

              <nav class="navbar is-primary is-fixed-top-degox">
                <div class="container">

                   <div class="d-brand-logo">
                    <a href="index.html">
                    <img src={process.env.PUBLIC_URL+"/assets/images/brand-logo/svg/brand-logo.svg"}/>
                      {/* <img src="/images/brand-logo/svg/brand-logo.svg" alt="brand logo"></img> */}
                    </a>
                  </div>

                  <div class="navbar-brand">
                    <span class="navbar-burger burger" data-target="navMenu">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>

                  <div id="navMenu" class="navbar-menu">
                    <div class="navbar-end is-uppercase">
                      <a href="#" class="navbar-item">Home</a>
                      <a href="#services" class="navbar-item">Our Services</a>
                      <a href="#About-us" class="navbar-item">About Us</a>
                      <a href="#Channel" class="navbar-item">Channel</a>
                      <a href="#Testimonial" class="navbar-item">Testimonial</a>
                      <a href="#Level-test" class="navbar-item">Level Test</a>
                      <a href="#Bookstore" class="navbar-item">Bookstore</a>
                    </div>
                  </div>
                </div>
              </nav>
          </header>

        </>  
    )
}

export default withRouter(Header)
