import React from 'react' 
import { Link, withRouter } from 'react-router-dom' 
import Slide from '@material-ui/core/Slide'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './header.component.css'

const SiteLogo = () => { 
  return (
    <Link to="/index" >   
        <img src={process.env.PUBLIC_URL+"/assets/images/brand-logo/svg/brand-logo.svg"} />
    </Link> 
  )
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MobileHeader = () => {
  return (
    <> 
      <div id="nav-small">
          <input type="checkbox" id="burgerMenuPublic"></input>
          <label for="burgerMenuPublic" class="menu-bt">
            <i class="fas fa-bars"></i> 
          </label> 

          <ul id="myUl" style={{overflow:'scroll'}}> 
            <li class="burgerMenuItems">  
              <a>
                <Link to="About">About Us <i class="fa fa-info-circle mx-1"></i></Link> 
              </a> 
            </li>
            <li class="burgerMenuItems">  
              <a>
                <Link to="Services">Services <i class="fa fa-gift mx-1"></i></Link> 
              </a> 
            </li>
            <li class="burgerMenuItems">  
              <a>
                <Link to="Channel">Channel <i class="fa fa-youtube-play mx-1"></i></Link>
              </a> 
            </li>
            <li class="burgerMenuItems">  
              <a>
                <Link to="Testimonial">Testimonial <i class="fas fa-users mx-1"></i></Link>
              </a> 
            </li>
            <li class="burgerMenuItems">  
              <a>
                <Link to="Leveltest">Level Test <i class="fa fa-check-circle mx-1"></i></Link>
              </a> 
            </li>
            <li class="burgerMenuItems">  
              <a>
                <Link to="Bookstore">Book Store <i class="fas fa-book mx-1"></i></Link>
              </a> 
            </li>  
            <li class="burgerMenuItems">  
              <a>
                <Link to="Contact">Contact <i class="fas fa-envelope mx-1"></i></Link>
              </a> 
            </li> 
            <li><a class="m-balanced" href="#">LOGIN | SIGNUP</a></li>
          </ul>
      </div> 
    </> 
    
  )
}

const DesktopHeader = () => {
  return (
    <div id="navMenu" class="navbar-menu">
      <div class="navbar-end">
        <Link to="About" class="navbar-item">About Us</Link>
        <Link to="Services" class="navbar-item">Services</Link>
      
        <Link to="Channel" class="navbar-item">Channel</Link>
        <Link to="Testimonial" class="navbar-item">Testimonial</Link>
        <Link to="Leveltest" class="navbar-item">Level Test</Link>
        <Link to="Bookstore" class="navbar-item">Bookstore</Link>  
      </div>
    </div>
  )
}

const TopNavSection = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
  } 

  return (
    <>
       <div class="d-playstore">
          <figure class="d-playstore-img has-background-white">
            <i class="fab fa-google-play mr-1 has-text-primary"></i>
          </figure>
          <a class="button is-primary" href="#" onClick={handleClickOpen}>
            <span>
                <i class="fa fa-download mr-1"></i>Download App
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
      <> 
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title"> 
              <span class="has-text-primary">Mobile Application</span>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <p class="has-text-dark">Our Mobile Apps are coming soon. Stay tuned.</p>
              </DialogContentText>
            </DialogContent>
            <DialogActions> 
                <a class="button is-link" onClick={handleClose}  > Close </a> 
            </DialogActions>
          </Dialog> 
      </>
    </>
  )
}

// const Logout = (history) => {
//     localStorage.clear()
//     history.push('/login')
// } 

const Header = function(props) { 
    console.log('isLoggedUser >> ', props.isLoggedUser) 

    return (
        <> 
          <header class="de-stickey">
               <section class="top-nav">   
                    <TopNavSection />                         
               </section>

              <nav class="navbar is-primary is-fixed-top-degox"> 

                <div class="container" style={{height:1}}> 

                  <div class="d-brand-logo">
                     <SiteLogo /> 
                  </div> 

                  <DesktopHeader />

                  {/* mobile view menu bar goes here */}
                  <MobileHeader />
                </div>
                
              </nav> 
          </header> 
        </>  
    )
}

export default withRouter(Header)
