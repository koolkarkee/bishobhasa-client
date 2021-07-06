import React from 'react' 
import { Link, withRouter } from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'

import './header.component.css'

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
            <AppBar>
                <Toolbar position="sticky">
                    {menu}
                </Toolbar>
            </AppBar>
        </>  
    )
}

export default withRouter(Header)
