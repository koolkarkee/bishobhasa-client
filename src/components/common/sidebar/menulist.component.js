import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import Divider from '@material-ui/core/Divider'  

import './menulist.component.css'
 
export default class MenuList extends Component {

  constructor(props){
    super(props)  
    this.state = {
      items : this.props.items,
      collapsed : false 
    }
  }

  handleListItemClick = e => {
    console.log('previously >> ', this.state.collapsed)

    this.setState((pre) => ({      
      collapsed : !pre.collapsed
    }), () => {
      console.log('pre cb >> ', this.state.collapsed) 
    })

    console.log('e >> ', this.state.collapsed) 
  }
 
  render() {
        
    const SidebarItem = function SidebarItem({ label, name, icon, link, items, depthStep = 10, depth = 0, handleListItemClick, collapsed, ...rest }) {
      let itemLink = link 
                    ?<>
                      <div key={name}>
                      <Link to={link}>  
                          <ListItem 
                              key = {name} 
                              button dense {...rest}> 
                              <ListItemText 
                                  key = {name}
                                  style={{ paddingLeft: depth * depthStep }}>
                                <span>{icon}</span>
                                <span style={{paddingLeft:10}}>{label}</span>
                              </ListItemText>
                          </ListItem> 
                          <Divider />
                        </Link>
                      </div> 
                      </>                
                    : <>
                      <div key={name}> 
                        <ListItem 
                            key = {name}
                            button dense {...rest} 
                            onClick = { handleListItemClick }
                        >  
                          <ListItemText 
                              key = {name}
                              style={{ paddingLeft: (depth * depthStep) }}                               
                              >
                                <span style={{ paddingLeft: 0}}>{icon}</span>
                                <span style={{paddingLeft:10}}>{label}</span>
                                <span style={{ paddingLeft: 20}}> 
                                  {!collapsed ? <ExpandLessIcon/> : <ExpandMoreIcon/> }
                                </span> 
                          </ListItemText>  
                        </ListItem>  
                        <Divider />
                      </div>
                      </>

      return (
        <>  
            {itemLink}
            {Array.isArray(items) ? (  
              <div className = { !collapsed ? "topbottomslide" : "topbottomslideClosed" } style = {{ display : 'flex' }}> 
                <Collapse  
                    in = { !collapsed } 
                    timeout =  "auto"
                    unmountOnExit = { true } 
                    >   
                      <List disablePadding dense>
                        {items.map((subItem) => (                
                          <SidebarItem
                            key={subItem.name}
                            depth={depth + 1}
                            depthStep={depthStep}
                            {...subItem}
                          /> 
                        ))}  
                      </List> 
                </Collapse> 
                </div>
              ) : null}      
        </>
      )
    }

    const FullList = function getList({ items, handleListItemClick, collapsed, depthStep, depth } = this.props){
      return (
        <>
        <div className="sidebar">
          <List disablePadding dense>
            {items.map((sidebarItem, index) => (
              <SidebarItem 
                key={`${sidebarItem.name}${index}`}
                depthStep={depthStep}
                depth={depth}
                {...sidebarItem}
                handleListItemClick = { handleListItemClick }
                collapsed = { collapsed }
              />
            ))}
          </List>
        </div>
        </>
      )
    }

    return (
      <>
        <FullList 
            items={this.state.items}
            handleListItemClick = { this.handleListItemClick }
            collapsed = { this.state.collapsed }
         /> 
      </>
    )
  } 

}
