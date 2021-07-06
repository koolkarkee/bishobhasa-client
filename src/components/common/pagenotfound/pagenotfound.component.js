import React, { Component } from 'react'

export default class PageNotFound extends Component {
    render() {
        return (
            <>
            <div className="img-notfound">  
                 <h2><p>page not found</p></h2>
                 <img 
                    src="https://i1.wp.com/saedx.com/blog/wp-content/uploads/2019/01/saedx-blog-featured-70.jpg?fit=1200%2C500&ssl=1"
                    width = "400"
                    height = "auto" 
                    alt = "page not found"
                 />
            </div> 
            </>
        )
    }
}

