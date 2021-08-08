import React, { Component } from 'react'

const NotFoundImage = () => { 
  return (
      <img class="error-img" src={process.env.PUBLIC_URL+"/assets/images/notfound/404-Not-Found-Error-Bishobhasa.png"} alt={process.env.PUBLIC_URL+"/assets/images/notfound/404-Not-Found-Error-Bishobhasa.png"} /> 
  )
}

export default class PageNotFound extends Component {
    render() {
        return (
            <>
                <section class="hero is-info">
                    <div class="container mt-5">
                    <h1 class="title is-size-1 has-text-centered has-text-primary my-1">404 Not Found! Oops!</h1>
                    <p class="has-text-centered is-size-4 mx-5">
                        The requested URL was not found on this server.
                    </p>
                    </div>

                    <div class="container">
                        <NotFoundImage />
                    </div>
                </section> 
            </>
        )
    }
}

