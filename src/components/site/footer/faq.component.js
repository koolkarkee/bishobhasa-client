import { Divider } from '@material-ui/core'
import React from 'react' 
import { withRouter } from 'react-router-dom' 

const qas = [
    { 
        question : "1. Where are you located? ", 
        answer : "Bishobhasa School & Consultancy is located at Level-5, Chabahil GopiKrishna-7, Kathmandu Metropolitician city next to Om Samaj Dental Hospital. You can also see on Google map as well for direction."
    }, 
    { 
        question : "2. What are the hours of operation of your institute?", 
        answer : "We operate 6 days a week that is from Sunday to Friday during 6AM to 6:30PM."
    }, 
    { 
        question : "3. Do you provide online or in-person classes?", 
        answer : "Yes, we do. We have options for both online (in zoom) and in-person classes at our premises as per student's will. We will be soon launching our recorded class as well." 
    },
    { 
        question : "4. Do I have access to free material on your website?", 
        answer : "Yes, you do have access to free materials. We have some of our lessons, teachings, learning material , books etc made freely available to all our students." 
    },
    { 
        question : "5. Can I take a free class before registering for it?", 
        answer : "Yes, you can. You can have 3 free classes before registering for the course." 
    },
    { 
        question : "6. How many classes do you provide a day?", 
        answer : "We provide 3 sessions in the morning and 3 in the afternoons with each sessions lasting for 90 minutes. Classes after 5PM in the evening is organized virtually through Zoom." 
    },
    { 
        question : "7. What is the price of your language class?", 
        answer : "It depends on your interest and course of study. For the time duration, course details and price, please visit on our service section of our site's language wings as per your interest for eg, Korean, English, Japanses, Chinese, Trainings, Tuitions and Abroad Study as well." 
    },
    { 
        question : "8. What is the length of the language class you provide?", 
        answer : "It depends on your interest and course of study. For the time duration, course details and price, please visit on our service section of our site's language wings as per your interest for eg, Korean, English, Japanses, Chinese, Trainings, Tuitions and Abroad Study as well." 
    },
    { 
        question : "9. Can I get access to an online book if I enroll in the class?", 
        answer : "Yes, only if you take a full package with books. No, If you don't  take a full package. Contact us for more details." 
    },
    { 
        question : "10. Do you provide classes for the absolute beginner?", 
        answer : "Yes, we provide classes for the absolute beginners as well (With or without materials)." 
    },
    { 
        question : "11. Is there any certification test after completing the courses?", 
        answer : "Yes, during the course of learning, we take a class tests once in a week or two weeks. Therefore, it depends on your course model. Yes, after the completion of course, we conduct exam that will assist you on a exam of JLPT, NAT, TOPIK (Korean), EPS TOPIK, TOEFL, IELTS etc." 
    },
    { 
        question : "12. Do I get a certificate at the end of the course?", 
        answer : "Yes, you will get a certificate at the end of your course but with a ceritificate charge. Please contact us for details." 
    },
    { 
        question : "13. Is there a language placement test to determine my level of Korean Language?", 
        answer : "Yes, after a mock test, your placement will be determined on the course which will be benefit for you." 
    },
    { 
        question : "14. What is the number of students you teach in one class?", 
        answer : "Only a maximum number of 15 students are allowed in one class. If you insist, then we can provide you special classes as well. For more, contact us." 
    },
    { 
        question : "15. What is the length of one class in a day?", 
        answer : "The length of each session is exactly 90 minutes." 
    },
    { 
        question : "16. How many levels are there in the Korean Language study program?", 
        answer : "Levels in Korean language study program : 1) Absolute Beginner/Beginner 2) Intermediate-1/Intermediate-2 3)Advance-1/Advance-2 4)Korean TOPIK 1 and 2." 
    }                    
] 

const FaqLevelInKoreanLanguage = () =>{
    return(
        <>
            <p class="has-text-justified has-text-primary has-text-weight-bold is-size-4 mx-5 mb-2">
                16. How many levels are there in the Korean Language study program?
            </p>
            <p class="has-text-justified is-size-6 mx-5 ml-5 pl-5 mb-3">
               Levels in Korean language study program : <br />  
                1) Absolute Beginner/Beginner <br /> 
                2) Intermediate-1/Intermediate-2 <br />  
                3) Advance-1/Advance-2 <br /> 
                4) Korean TOPIK 1 and 2 
            </p>
            <p class="mx-5 mb-5 pl-5">
                <Divider></Divider>
            </p> 
        </>
    )
}

const FaqRow = (props) => {
    //console.log("id >> ", props.id)
    var index = parseInt(props.id) - 1
    //console.log("index >> ", index)
    return (
        <>
            <p class="has-text-justified has-text-primary has-text-weight-bold is-size-4 mx-5 mb-2">
                 { qas[index].question }
            </p>
            <p class="has-text-justified is-size-6 mx-5 pl-5 mb-3">
                { qas[index].answer } 
            </p>
            <p class="mx-5 mb-5 pl-5">
                <Divider></Divider>
            </p> 
        </>
    )
}
 
const FaqComponent = function(props) { 
    
    return (
        <> 
          <section class="hero notification is-light mb-0">
            <div class="container my-2">
              
              <h2 class="title has-text-centered has-text-primary">Frequently Asked Questions</h2>

              <FaqRow id="1" />
              <FaqRow id="2" /> 
              <FaqRow id="3" />
              <FaqRow id="4" />
              <FaqRow id="5" />
              <FaqRow id="6" />
              <FaqRow id="7" />
              <FaqRow id="8" />
              <FaqRow id="9" />
              <FaqRow id="10" />
              <FaqRow id="11" />
              <FaqRow id="12" />
              <FaqRow id="13" />
              <FaqRow id="14" />
              <FaqRow id="15" /> 
              <FaqLevelInKoreanLanguage></FaqLevelInKoreanLanguage>
            </div>
          </section> 
        </>  
    )
}

export default withRouter(FaqComponent)
