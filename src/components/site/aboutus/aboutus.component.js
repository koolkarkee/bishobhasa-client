import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
 import TimelineDot from '@material-ui/lab/TimelineDot';
 import Paper from '@material-ui/core/Paper';
 
import HistoryIcon from '@material-ui/icons/History';
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import React from 'react' 
import { withRouter } from 'react-router-dom' 
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

// const HistoryImage = () => {
//   return (
//     <>
//       <div class="column is-3">
//           <figure class="image">
//                 <img class="is-rounded" src={process.env.PUBLIC_URL+"/assets/images/about-us/student1.jpg"} alt={process.env.PUBLIC_URL+"/assets/images/about-us/student1.jpg"} />
//           </figure> 
          
//       </div> 
//     </>
//   )
// }

const History = () => {
  const classes = useStyles()

  return (
    <>
      <TimelineItem> 
        <TimelineSeparator>
          <TimelineDot>
            <HistoryIcon /> 
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <h1 class="is-size-5 has-text-weight-bold has-text-primary">
              History  <Divider style={{width:80}} />
            </h1> 
            
            <p>
              We are legally registered educational institution under the Nepal government policy and act in 2019
            </p> 
          </Paper>
        </TimelineContent>
      </TimelineItem> 
    </>
  )
} 

const Mission = () => {
  const classes = useStyles()

  return (
    <> 
      <TimelineItem> 
          <TimelineSeparator>
            <TimelineDot  >
              <CenterFocusStrongIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
               
                <h1 class="is-size-5 has-text-weight-bold has-text-primary">
                    Mission  
                </h1> 
                <Divider style={{width:80, float:'right'}} />  
                <p style={{clear:'right'}}>
                   We are legally registered educational institution under the Nepal government policy and act in 2019
                </p> 
            </Paper>
          </TimelineContent>
        </TimelineItem>
    </>
  )
}

const Vision = () => {
  const classes = useStyles()

  return (
    <> 
        <TimelineItem> 
          <TimelineSeparator>
            <TimelineDot>
              <ArrowForwardIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <h1 class="is-size-5 has-text-weight-bold has-text-primary">
                  Vision <Divider style={{width:80}} /> 
                </h1> 
                <p>
                  We are legally registered educational institution under the Nepal government policy and act in 2019
                </p> 
            </Paper>
          </TimelineContent>
        </TimelineItem>  
    </>
  )
}


const BasicTimeline = () => {
 
  return (
    <> 
      <Timeline align="alternate">

          <History></History>
          <Mission></Mission> 
          <Vision></Vision>
        
    </Timeline>
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
              <BasicTimeline></BasicTimeline> 
            </div>
          </section>         
        </>  
    )
}

export default withRouter(AboutUsComponent)
