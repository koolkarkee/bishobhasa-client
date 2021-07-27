import React from 'react' 
import { withRouter } from 'react-router-dom' 

const AboutUsComponent = function(props) {  
    
    return (
        <>  
          {/* <section class="hero is-light" id="About-us">
              <div class="container block">

              <h1 class="title is-size-2 my-3 has-text-centered has-text-primary mt-5">About Us</h1>
                      <p class="has-text-justified is-size-6 mx-5">
                        We are legally registered educational institution under the Nepal government policy and act in 2019,
                        located in Kathmandu Metropolitan city Chabahil – 7 Gopikrishna Nagar. Our prime objectives are teaching
                          various languages, job orientation and skill development trainings and abroad study counselling, documentation and processing. We have a very qualified and more than 5 to 10 years of experienced teams to offer you the above mention services.
                      </p>
                  <br /> 
              </div>  
              <br />
          </section>  */}

        <section class="hero is-light pb-5" id="About-us">
            <div class="container block">
              <h1 class="title is-size-2 my-3 has-text-centered has-text-primary my-5">About</h1>
              <p class="has-text-justified is-size-6 mx-5">
                We are legally registered educational institution under the Nepal government policy and act in 2019, located in Kathmandu Metropolitan city Chabahil – 7 Gopikrishna Nagar. Our prime objectives are teaching various languages, job orientation and skill development trainings and abroad study counselling, documentation and processing. We have a very qualified and more than 5 to 10 years of experienced teams to offer you the above mention services.
              </p>
            </div>

            <div class="container">
              <div class="timeline px-5">

                <div class="columns column-left">
                  <div class="column is-5">
                    <div class="timeline-heading">
                      <h1 class="title is-4 has-text-right pr-5">History</h1>
                      <p class="has-text-right is-size-6 mx-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
                      </p>
                    </div>
                  </div>
                  <div class="column">
                    <div class="timeline-image">
                      <figure class="image">
                        <img class="is-rounded" src="./images/sample image/student3.jpg" />
                      </figure>
                    </div>
                  </div>
                  <div class="column is-5"> 
                  </div>
                </div>

                <div class="columns column-right">
                  <div class="column is-5"> 
                  </div>
                  <div class="column">
                    <div class="timeline-image">
                      <figure class="image">
                        <img class="is-rounded" src="./images/sample image/student2.jpg" />
                      </figure>
                    </div>
                  </div>
                  
                  <div class="column is-5">
                    <div class="timeline-heading">
                      <h1 class="title is-4 pr-5">Misson</h1>
                      <p class="is-size-6 my-2 has-text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
                      </p>
                    </div>
                  </div>

                </div>

                <div class="columns column-left">
                  <div class="column is-5">
                    <div class="timeline-heading">
                      <h1 class="title is-4 has-text-right pr-5">Vision</h1>
                      <p class="has-text-right is-size-6 mx-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
                      </p>
                    </div>
                  </div>
                  <div class="column">
                    <div class="timeline-image">
                      <figure class="image">
                        <img class="is-rounded" src="./images/sample image/student1.jpg" />
                      </figure>
                    </div>
                  </div>
                  <div class="column is-5"> 
                  </div>
                </div>


              </div>
            </div>
          </section>
          

          
          
        </>  
    )
}

export default withRouter(AboutUsComponent)
