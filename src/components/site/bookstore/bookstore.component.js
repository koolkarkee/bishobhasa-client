import React from 'react' 
import { withRouter, Link } from 'react-router-dom' 
 

const path1 = "/assets/images/bookstore/Korean-basic-book-part-1.jpg" 
const path2 = "/assets/images/bookstore/Korean-basic-book-part-2.jpg"
const path3 = "/assets/images/bookstore/Korean-language-intermediate-part-1.jpg" 
const path4 = "/assets/images/bookstore/Korean-language-intermediate-part-2.jpg" 
const path5 = "/assets/images/bookstore/Korean-language-advance-book.jpg"
const path6 = "/assets/images/bookstore/Korean-Language-EPS-Question-Bank.jpg" 
const path7 = "/assets/images/bookstore/Korean-language-EPS-Skill-Test-and-exam-related-book.jpg"
 

const BookImage = (props) => {
  if(props.order === "1"){
    return (
      <img src={process.env.PUBLIC_URL+ path1} alt={process.env.PUBLIC_URL+ path1} /> 
    )
  } 

  if(props.order === "2"){
    return (
      <img src={process.env.PUBLIC_URL+ path2} alt={process.env.PUBLIC_URL+ path2} /> 
    )
  } 

  if(props.order === "3"){
    return (
      <img src={process.env.PUBLIC_URL+ path3} alt={process.env.PUBLIC_URL+ path3} /> 
    )
  } 

  if(props.order === "4"){
    return (
      <img src={process.env.PUBLIC_URL+ path4} alt={process.env.PUBLIC_URL+ path4} /> 
    )
  } 

  if(props.order === "5"){
    return (
      <img src={process.env.PUBLIC_URL+ path5} alt={process.env.PUBLIC_URL+ path5} /> 
    )
  } 

  if(props.order === "6"){
    return (
      <img src={process.env.PUBLIC_URL+ path6} alt={process.env.PUBLIC_URL+ path6} /> 
    )
  } 

  if(props.order === "7"){
    return (
      <img src={process.env.PUBLIC_URL+ path7} alt={process.env.PUBLIC_URL+ path7} /> 
    )
  } 
 
 
}
 

const BookItem = (props) => {
  return (
    <>
      <div class="card-bstore">
        <span></span>
        <div class="imgBx">
            <BookImage order={props.order} /> 
          </div>
        <div class="content">
          <div>
            <div class="content-head">For sale</div>
            <div class="content-h2">Korean Book store</div>

            <div class="content-list">
              <p><del>Rs. {props.price}</del></p>
              <p>Rs. {props.discountedPrice}</p>
              <p>
                <button disabled class="button is-text is-primary">
                  <Link to="/"><i class="fas fa-shopping-cart"></i></Link>
                </button><br />   
              </p>
            </div>
          </div>
        </div>
        {/* <div class="card-highlight">
          <h2>Grammar Textbooks<br />
            & Workbooks</h2>
        </div> */}
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
                  We have a qualified and best teams for the services we offer to our valued readers/users or students. 
                  Bishobhasha School's team members also publishes learning materials and publishes it as E-book and on paper book. 
                  Please get access to our website and empower your knowledge. 
                </p>  
             
                <br />

                  <div class="dego-container">
                    <BookItem order="1" price="750" discountedPrice="600" />
                    <BookItem order="2" price="750" discountedPrice="600" />
                    <BookItem order="3" price="750" discountedPrice="600" />
                    <BookItem order="4" price="750" discountedPrice="600" />
                    <BookItem order="5" price="750" discountedPrice="600" />
                    <BookItem order="6" price="750" discountedPrice="600" />
                    <BookItem order="7" price="750" discountedPrice="600" /> 

                    <p class="has-text-justified is-size-6 mx-5 has-text-primary"> 
                      You can also order your books contacting us. 
                      Delivery charges will be added on actual price. 
                      Please feel free to visit our office or contant us on email, or landline number.                
                    </p>  
                  </div>
 
              </div> 
              
            </div>
          </section>
           
        </>  
    )
}

export default withRouter(BookStoreComponent)
