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
        <img src={process.env.PUBLIC_URL+"/assets/images/brand-logo/png/brand-logo.png"} />
    </Link> 
  )
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


 
// const Logout = (history) => {
//     localStorage.clear()
//     history.push('/login')
// } 

const Header = function(props) { 
    console.log('isLoggedUser >> ', props.isLoggedUser)

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false);
    }

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
                  <figure class="d-playstore-img has-background-white">
                    <i class="fab fa-google-play mr-1 has-text-primary"></i>
                  </figure>
                  <a class="button is-primary" href="#" onClick={handleClickOpen}>
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

export default withRouter(Header)
