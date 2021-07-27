import React from 'react' 
import { withRouter } from 'react-router-dom' 

const History = () => {
  return (
    <>
       <div class="columns column-left">
          <div class="column is-5">
            <div class="timeline-heading">
              <h1 class="title is-4 has-text-right pr-5 hr-break-contact">
                  History  <hr style={{width:100, marginTop: 10, marginLeft:320}}/> 
              </h1> 

              <p class="has-text-right is-size-6 mx-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
              </p>
            </div>
          </div>
          <div class="column">
            <div class="timeline-image">
              <figure class="image">
                <img class="is-rounded" src={process.env.PUBLIC_URL+"/assets/images/about-us/student1.jpg"} alt={process.env.PUBLIC_URL+"/assets/images/about-us/student1.jpg"} />
              </figure>
            </div>
          </div>
          <div class="column is-5"> 
          </div>
        </div>
    </>
  )
}

const Mission = () => {
  return (
    <> 
      <div class="columns column-right">

        <div class="column is-5"> 
        </div>

        <div class="column">
          <div class="timeline-image">
            <figure class="image">
              <img class="is-rounded" src={process.env.PUBLIC_URL+"/assets/images/about-us/student1.jpg"} alt={process.env.PUBLIC_URL+"/assets/images/about-us/student1.jpg"} />
            </figure>
          </div>
        </div>
        
        <div class="column is-5">
          <div class="timeline-heading"> 

            <h1 class="title is-4 pr-5 hr-break-contact">
              Misson <hr style={{width:100, marginTop: 10}}/> 
            </h1>

            <p class="is-size-6 my-2 has-text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
            </p>
          </div>
        </div>

      </div> 
    </>
  )
}

const Vision = () => {
  return (
    <> 
      <div class="columns column-left">

        <div class="column is-5">
          <div class="timeline-heading">

           <h1 class="title is-4 has-text-right pr-5 hr-break-contact">
                  Vision  <hr style={{width:100, marginTop: 10, marginLeft:320}}/> 
           </h1> 

            <p class="has-text-right is-size-6 mx-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
            </p>
          </div>
        </div>

        <div class="column">
          <div class="timeline-image">
            <figure class="image">
              <img class="is-rounded" src={process.env.PUBLIC_URL+"/assets/images/about-us/student1.jpg"} alt={process.env.PUBLIC_URL+"/assets/images/about-us/student1.jpg"} />
            </figure>
          </div>
        </div>

        <div class="column is-5"> 
        </div>

      </div> 
    </>
  )
}

const AboutUsComponent = function(props) {  
    
    return (
        <>  
          <section class="hero is-light pb-5" id="About-us">
            <div class="container block">
              <h1 class="title is-size-2 has-text-centered has-text-primary mb-5">About</h1>
              <p class="has-text-justified is-size-6 mx-5">
                We are legally registered educational institution under the Nepal government policy and act in 2019, located in Kathmandu Metropolitan city Chabahil – 7 Gopikrishna Nagar. Our prime objectives are teaching various languages, job orientation and skill development trainings and abroad study counselling, documentation and processing. We have a very qualified and more than 5 to 10 years of experienced teams to offer you the above mention services.
              </p>
            </div>

            <div class="container">
              <div class="timeline px-5">

                <History />

                <Mission />

                <Vision />

              </div>
            </div>
          </section>         
        </>  
    )
}

export default withRouter(AboutUsComponent)
