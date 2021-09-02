import { BrowserRouter as Router, Route, Switch, Redirect }  from 'react-router-dom'
import React from 'react'

// import { LoginComponent } from '../components/auth/login/login.component'
// import { RegisterComponent } from '../components/auth/register/register.component'

import HeaderComponent from '../components/common/header/header.component'
import HomeComponent from '../components/site/home/home.componenet'
import ServiceComponent from '../components/site/service/service.component'
import AboutUsComponent from '../components/site/aboutus/aboutus.component'
import AboutTeamComponent from '../components/site/aboutus/team.component'
import TestimonialComponent from '../components/site/testimonial/testimonial.component'
import BookStoreComponent from '../components/site/bookstore/bookstore.component'

import ContactComponent from '../components/site/contact/contact.component'
import FooterComponent from '../components/site/footer/footer.component'

import PageNotFoundComponent from '../components/common/pagenotfound/pagenotfound.component'
import ComingSoonComponent from '../components/common/comingsoon/comingsoon.component'
import DashBoardComponent from '../components/common/dashboard/dashboard.component'
import SidebarBurgerComponent from './../components/common/sidebar/sidebar.component'

import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import DomainIcon from '@material-ui/icons/Domain';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SupervisedUserCircle from "@material-ui/icons/SupervisedUserCircle";

import './../components/common/header/header.component.css'
import './../components/common/sidebar/sidebar.component.css' 
import './../components/common/sidebar/menulist.component.css'
import './../components/common/pagenotfound/pagenotfound.component.css'
import './../components/settings/industry-category/industrycategory.component.css'
import './../routing/app.routing.css'

import IndustryCategoryComponent from '../components/settings/industry-category/industrycategory.component'
  

//TODO : 
//1. add role and orderOfMenu and prepare data in back end
//2. fetch items from back end and display it dynamically 
const items = [
    { name: 'home', label: 'Home', icon : <HomeIcon/>, link : `/dashboard` }, 
    {
      name: 'settings',
      label: 'Settings',
      icon : <SettingsIcon/>,
      items: [
          { name: 'industryCategory', label: 'Industry Category', icon : <DomainIcon/>, link : '/settings/template/industry-category' },
          { name: 'user', label: 'User', icon : <SupervisedUserCircle/>, link : '/settings/user' }
        ]
    },
    { name : 'logo', label : 'Logo', icon : <PhotoLibraryIcon/>, link : '/settings/template/logo'}
  ] 

//protected route
const ProtectedRoute = ({component : Component, props}) => ( 
    <Route {...props} 
        render = {(props) => (
            <>
                { 
                    localStorage.getItem('token') 
                    ?
                    <>
                        <div id="header">
                            <HeaderComponent isLoggedUser = { true }></HeaderComponent>  
                        </div> 
                       
                        <div className="sidebar">
                            <div id="outer-container">
                                <div> 
                                    <SidebarBurgerComponent items={items}></SidebarBurgerComponent>  
                                </div>
                                <div id="page-wrap">
                                    <Component { ...props}></Component>
                                </div>
                            </div>  
                        </div> 
                    </>
                    : <Redirect to="/login"></Redirect>
                } 
            </> 
    )}> 
    </Route>  
)  

const EntirePublicPageComponent = () => { 
    return (
        <> 
            <HomeComponent />
            <ServiceComponent /> 
            <AboutUsComponent />
            <TestimonialComponent />
            <BookStoreComponent />
            <ContactComponent /> 
            <FooterComponent />
        </>
    )
}

//public route
const PublicRoute = ({component : Component, props}) => ( 
    <Route {...props} 
        render = {(props) => (
            <>  
                {/* <Header isLoggedUser = { localStorage.getItem('token') ? true : false }></Header>   */}
 
                {/* <HomeComponent />
                <ServiceComponent /> 
                <AboutUsComponent />
                <TestimonialComponent />
                <BookStoreComponent />
                <ContactComponent /> 
                <FooterComponent /> */}

                <Component { ...props}></Component> 
            </> 
    )}> 
    </Route>  
) 

 
//page not found
const NotFoundRoute = () => ( 
    <Route  
        render = {() => (
            <>  
            {    
                !(localStorage.getItem('token')) 
                ? <PublicRoute component={PageNotFoundComponent}></PublicRoute>   
                : <ProtectedRoute component={PageNotFoundComponent}></ProtectedRoute> 
 
            }  
            </> 
    )}> 
    </Route>  
) 


export default function AppRouting() {
    return (
        <Router>
            <>
            <HeaderComponent />
            
            <Switch>  
                <PublicRoute path="/" exact component={EntirePublicPageComponent}></PublicRoute>
                <PublicRoute path="/Home" exact component={EntirePublicPageComponent}></PublicRoute>
                <PublicRoute path="/Index" exact component={EntirePublicPageComponent}></PublicRoute>
            

                <PublicRoute path="/Services" exact component={ServiceComponent}></PublicRoute>
                <PublicRoute path="/About" exact component={AboutUsComponent}></PublicRoute>
                <PublicRoute path="/Team" exact component={AboutTeamComponent}></PublicRoute>
                <PublicRoute path="/Testimonial" exact component={TestimonialComponent}></PublicRoute>
                <PublicRoute path="/BookStore" exact component={BookStoreComponent}></PublicRoute>
                <PublicRoute path="/Contact" exact component={ContactComponent}></PublicRoute>
                <PublicRoute path="/Footer" exact component={FooterComponent}></PublicRoute>
                <PublicRoute path="/ComingSoon" exact component={ComingSoonComponent}></PublicRoute>

                <ProtectedRoute path ="/dashboard" component={DashBoardComponent} />
                <ProtectedRoute path ="/settings/template/industry-category" component={IndustryCategoryComponent} />
  
                <NotFoundRoute></NotFoundRoute> 
            </Switch>
            </>  
        </Router>   
    ) 
}
