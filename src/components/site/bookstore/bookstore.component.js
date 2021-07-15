import React from 'react' 
import { withRouter, Link } from 'react-router-dom' 
 
// import './../../css/bstyle.css'

// import bookImage1 from './../../images/bookstore/korean basic book-1.jpg'
// import bookImage2 from './../../images/bookstore/korean basic book-2.jpg'
// import bookImage3 from './../../images/bookstore/korean basic book-3.jpg'
// import bookImage4 from './../../images/bookstore/korean basic book-4.jpg'
// import bookImage5 from './../../images/bookstore/korean basic book-5.jpg'
// import bookImage6 from './../../images/bookstore/korean basic book-6.jpg'
// import bookImage7 from './../../images/bookstore/korean basic book-7.jpg'

const BookImage1 = () => {
  return ( 
    <img src={process.env.PUBLIC_URL+"/assets/images/bookstore/korean basic book-1.jpg"} alt={process.env.PUBLIC_URL+"/assets/images/bookstore/korean basic book-1.jpg"} /> 
  ) 
}

// const BookImage2 = () => {
//   return (
//     <img src={process.env.PUBLIC_URL+"/assets/images/bookstore/korean basic book-2.jpg"} alt={process.env.PUBLIC_URL+"/assets/images/bookstore/korean basic book-2.jpg"} /> 
//   )
// }

const BookItem = () => {
  return (
    <>
      <div class="card-bstore">
        <span></span>
        <div class="imgBx">
            <BookImage1 /> 
          </div>
        <div class="content">
          <div>
            <div class="content-head">For sale</div>
            <div class="content-h2">Korean Book store</div>

            <div class="content-list">
              <p><del>$500.00</del></p>
              <p>$131.75</p>
              <p>
                <button class="button is-text is-primary">
                  <Link to="/"><i class="fas fa-shopping-cart"></i></Link>
                </button><br />   
              </p>
            </div>
          </div>
        </div>
        <div class="card-highlight">
          <h2>Grammar Textbooks<br />
            & Workbooks</h2>
        </div>
      </div> 
    </>
  )
}


const BookStoreComponent = function(props) { 
    
    return (
        <>  
            <section class="hero is-light" id="Bookstore">
            <div class="container ">

              <div class="block">
                <h1 class="title is-size-2 my-3 has-text-centered has-text-primary">Book Store</h1>
                <p class="has-text-justified is-size-6 mx-5">
                Publication means a book stores. We have a qualified and best teams for the services we offer to our valued readers/users or students. Bishobhasha School's team members also publishes learning materials and publishes it as E-book and on paper book. Please get access to our website and empower your knowledge. You can also order your books contacting us. Deliver charges will be added on actual price. Please feel free to visit our office or contant us on email, or landline number.                
                </p>  
                <br />

                  <div class="dego-container">
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                  </div>


              </div> 
              
            </div>
          </section>
           
        </>  
    )
}

export default withRouter(BookStoreComponent)
