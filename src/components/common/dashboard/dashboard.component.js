import React, { Component } from 'react' 

import './../dashboard/dashboard.component.css'
import './../sidebar/sidebar.component.css'
import './../sidebar/menulist.component.css'


export default class DashBoardComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : ''
        } 
    }
    
    componentDidMount() {
        // this.setState({
        //     username : this.props.match.params['name']    
        // })    

        var user = JSON.parse(localStorage.getItem('user'))
        this.setState({
            username : user.username 
        })      
         
        console.log('check local storage for user >> ', user.username)
    }

    render() {
        return (
            <> 
                <div>
                    <p className="welcome_para">
                        Welcome { this.state.username } 
                    </p> 
                </div>  
            </>
        )
    }
}
