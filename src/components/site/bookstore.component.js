import React from 'react' 
import { Link, withRouter } from 'react-router-dom' 
 
import './../../css/bstyle.css'

import bookImage1 from './../../images/bookstore/korean basic book-1.jpg'
import bookImage2 from './../../images/bookstore/korean basic book-2.jpg'
// import bookImage3 from './../../images/bookstore/korean basic book-3.jpg'
// import bookImage4 from './../../images/bookstore/korean basic book-4.jpg'
// import bookImage5 from './../../images/bookstore/korean basic book-5.jpg'
// import bookImage6 from './../../images/bookstore/korean basic book-6.jpg'
// import bookImage7 from './../../images/bookstore/korean basic book-7.jpg'


const BookStoreComponent = function(props) { 
    
    return (
        <>  
            <section class="hero is-light" id="Bookstore">
            <div class="container ">

              <div class="block">
                <h1 class="title is-uppercase is-size-2 my-3 has-text-centered has-text-primary">Bookstore</h1>
                <p class="has-text-justified is-size-6 mx-5">
                Publication means a book stores. We have a qualified and best teams for the services we offer to our valued readers/users or students. Bishobhasha School's team members also publishes learning materials and publishes it as E-book and on paper book. Please get access to our website and empower your knowledge. You can also order your books contacting us. Deliver charges will be added on actual price. Please feel free to visit our office or contant us on email, or landline number.                
                </p>  
                <br />

                  <div class="dego-container">
                    <div class="card-bstore">
                      <span></span>
                      <div class="imgBx">
                          <img src={bookImage1} alt={bookImage1} /> 
                      </div>
                      <div class="content">
                        <div>
                          <div class="content-head">For sale</div>
                          <div class="content-h2">Korean Book store</div>
              
                          <div class="content-list">
                            <p><del>$500.00</del></p>
                            <p>$131.75</p>
                            <p><a href="#"><i class="fas fa-shopping-cart"></i></a></p>
                          </div>
                        </div>
                      </div>
                      <div class="card-highlight">
                        <h2>Grammar Textbooks<br />
                          & Workbooks</h2>
                      </div>
                    </div>
                  
                    <div class="card-bstore">
                      <span></span>
                      <div class="imgBx">
                          <img src={bookImage2} alt={bookImage2} /> 
                          {/* <img src="./images/bookstore/korean basic book-2.jpg"> */}
                        </div>
                      <div class="content">
                        <div>
                          <div class="content-head">For sale</div>
                          <div class="content-h2">Korean Book store</div>
              
                          <div class="content-list">
                            <p><del>$500.00</del></p>
                            <p>$131.75</p>
                            <p><a href="#"><i class="fas fa-shopping-cart"></i></a></p>
                          </div>
                        </div>
                      </div>
                      <div class="card-highlight">
                        <h2>Grammar Textbooks<br />
                          & Workbooks</h2>
                      </div>
                    </div>
  
                    <div class="card-bstore">
                      <span></span>
                      <div class="imgBx">
                          {/* <img src="./images/bookstore/korean book-2.jpg"> */}
                          <img src={bookImage2} alt={bookImage2} /> 
                      </div>
                      <div class="content">
                        <div>
                          <div class="content-head">For sale</div>
                          <div class="content-h2">Korean Book store</div>
              
                          <div class="content-list">
                            <p><del>$500.00</del></p>
                            <p>$131.75</p>
                            <p><a href="#"><i class="fas fa-shopping-cart"></i></a></p>
                          </div>
                        </div>
                      </div>
                      <div class="card-highlight">
                        <h2>Grammar Textbooks<br />
                          & Workbooks</h2>
                      </div>
                    </div>
                    <div class="card-bstore">
                      <span></span>
                      <div class="imgBx"><img src={bookImage2} alt={bookImage2} /> </div>
                      <div class="content">
                        <div>
                          <div class="content-head">For sale</div>
                          <div class="content-h2">Korean Book store</div>
              
                          <div class="content-list">
                            <p><del>$500.00</del></p>
                            <p>$131.75</p>
                            <p><a href="#"><i class="fas fa-shopping-cart"></i></a></p>
                          </div>
                        </div>
                      </div>
                      <div class="card-highlight">
                        <h2>Grammar Textbooks<br />
                          & Workbooks</h2>
                      </div>
                    </div>
                    <div class="card-bstore">
                      <span></span>
                      <div class="imgBx"><img src={bookImage2} alt={bookImage2} /> </div>
                      <div class="content">
                        <div>
                          <div class="content-head">For sale</div>
                          <div class="content-h2">Korean Book store</div>
              
                          <div class="content-list">
                            <p><del>$500.00</del></p>
                            <p>$131.75</p>
                            <p><a href="#"><i class="fas fa-shopping-cart"></i></a></p>
                          </div>
                        </div>
                      </div>
                      <div class="card-highlight">
                        <h2>Grammar Textbooks<br />
                          & Workbooks</h2>
                      </div>
                    </div>
                    <div class="card-bstore">
                      <span></span>
                      <div class="imgBx"><img src={bookImage2} alt={bookImage2} /> </div>
                      <div class="content">
                        <div>
                          <div class="content-head">For sale</div>
                          <div class="content-h2">Korean Book store</div>
              
                          <div class="content-list">
                            <p><del>$500.00</del></p>
                            <p>$131.75</p>
                            <p><a href="#"><i class="fas fa-shopping-cart"></i></a></p>
                          </div>
                        </div>
                      </div>
                      <div class="card-highlight">
                        <h2>Grammar Textbooks<br />
                          & Workbooks</h2>
                      </div>
                    </div>
                    <div class="card-bstore">
                      <span></span>
                      <div class="imgBx"><img src={bookImage2} alt={bookImage2} /> </div>
                      <div class="content">
                        <div>
                          <div class="content-head">For sale</div>
                          <div class="content-h2">Korean Book store</div>
              
                          <div class="content-list">
                            <p><del>$500.00</del></p>
                            <p>$131.75</p>
                            <p><a href="#"><i class="fas fa-shopping-cart"></i></a></p>
                          </div>
                        </div>
                      </div>
                      <div class="card-highlight">
                        <h2>Grammar Textbooks<br />
                          & Workbooks</h2>
                      </div>
                    </div>
                    <div class="card-bstore">
                      <span></span>
                      <div class="imgBx"><img src={bookImage2} alt={bookImage2} /> </div>
                      <div class="content">
                        <div>
                          <div class="content-head">For sale</div>
                          <div class="content-h2">Korean Book store</div>
              
                          <div class="content-list">
                            <p><del>$500.00</del></p>
                            <p>$131.75</p>
                            <p><a href="#"><i class="fas fa-shopping-cart"></i></a></p>
                          </div>
                        </div>
                      </div>
                      <div class="card-highlight">
                        <h2>Grammar Textbooks<br />
                          & Workbooks</h2>
                      </div>
                    </div>
                  </div>


              </div> 
              
            </div>
          </section>
           
        </>  
    )
}

export default withRouter(BookStoreComponent)
