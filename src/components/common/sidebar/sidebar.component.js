import React, { Component } from 'react'
import { reveal as Menu } from 'react-burger-menu' 

import MenuList from './menulist.component' 
 
export default class SidebarBurgerComponent extends Component {
    constructor(props){
        super(props) 
        this.state = { 
            menuOpen : true,
            items : this.props.items
        }
    } 

    showSettings = e => {
        e.preventDefault(); 
    }

    handleStateChange = (state) => {
        this.setState({menuOpen: state.isOpen})  
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu = e => {
        e.preventDefault()

        this.setState({menuOpen: false})
    }

    toggleMenu = () => {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }

    render() {
        return (
            <>  
            <Menu   
                width = { '225px'} 
                pageWrapId={ "page-wrap" }  
                isOpen = { this.state.menuOpen }
                onStateChange = { (state) => this.handleStateChange(state) } 
                noOverlay
                customBurgerIcon = {false} 
                customCrossIcon = {false}
            > 
                <MenuList items={this.state.items}></MenuList>
            </Menu>   
            </>
        )
    }
}
