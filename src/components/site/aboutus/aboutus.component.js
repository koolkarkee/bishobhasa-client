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
  iconColor : {
    color : "#149179"
  }
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
            <HistoryIcon className={classes.iconColor} /> 
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <h1 class="is-size-5 has-text-weight-bold has-text-primary">
              History  <Divider style={{width:80}} />
            </h1> 
            
            <div class="pb-2">
              <ul class="ml-3">
                <li class="has-text-primary">2011 - 2015 </li>
                <li>
                  <span class="mt-1 mr-2 has-text-left is-size-6">
                   <i class="fa fa-plane has-text-primary pl-2"></i>  
                  </span> 
                  <span>
                    Moved to South Korea
                  </span> 
                </li>
                <li>
                  <span class="mt-1 mr-2 has-text-left is-size-6">
                   <i class="fa fa-check pl-2"></i>  
                  </span> 
                  <span>
                   Studied Korean  
                  </span> 
                </li>
                <li class="pb-4">
                  <span class="mt-1 mr-2 has-text-left is-size-6">
                   <i class="fa fa-check pl-2"></i>  
                  </span> 
                  <span>
                  Formed a team in Nepal
                  </span> 
                </li>
 
                <li class="has-text-primary">2019 - present </li>
                <li>
                  <span class="mt-1 mr-2 has-text-left is-size-6">
                   <i class="fa fa-building has-text-primary pl-2"></i>  
                  </span> 
                  <span>
                    Founded Bishwobhasha    
                  </span> 
                </li>  
                <li>
                  <span class="mt-1 mr-2 has-text-left is-size-6">
                   <i class="fa fa-check pl-2"></i>  
                  </span> 
                  <span>
                  Teaching Korean  
                  </span> 
                </li> 
                <li>
                  <span class="mt-1 mr-2 has-text-left is-size-6">
                   <i class="fa fa-check pl-2"></i>  
                  </span> 
                  <span>
                  Writing Korean books
                  </span> 
                </li>  
              </ul> 
            </div>  
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
            <TimelineDot className={classes.iconColor}>
              <CenterFocusStrongIcon style={{fill: "#149179"}} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
               
                <h1 class="is-size-5 has-text-weight-bold has-text-primary">
                    Mission  
                </h1> 
                <Divider style={{width:80, float:'right'}} />  
                <div style={{clear:'right'}}>
                  <ul>
                    <li>
                       <span>
                          Teaching languages 
                        </span> 
                        <span class="mt-1 mr-2 has-text-left is-size-6">
                          <i class="fa fa-check pl-2"></i>  
                        </span>  
                    </li>  
                    <li>
                      <span>
                        Korean Language   
                      </span> 
                      <span class="mt-1 mr-2 has-text-left is-size-6">
                        <i class="fa fa-check pl-2"></i>  
                      </span>  
                    </li> 
                    <li>
                      <span>
                       Career development  
                      </span> 
                      <span class="mt-1 mr-2 has-text-left is-size-6">
                        <i class="fa fa-check pl-2"></i>  
                      </span>  
                    </li> 
                  </ul>
                </div> 
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
            <TimelineDot className={classes.iconColor}>
              <ArrowForwardIcon style={{fill: "#149179"}} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <h1 class="is-size-5 has-text-weight-bold has-text-primary">
                  Vision <Divider style={{width:80}} /> 
                </h1> 
                <p>
                  We have a vision to run a language school of an international level.
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
              <p class="has-text-justified is-size-6 mx-5 pb-4">
                In search of better life people always seek an opportunity. 
                We believe opportunity rarely happens and it should be created. 
                Hence, we are here to help you to give a shape towards the successful journey. 
              </p>
              <p class="has-text-justified is-size-6 mx-5">
                 Our main objectives are teaching various international languages; 
                 conduct a useful and important job orientation trainings, skill and career development trainings for abroad study and abroad employment. 
                 Apart from that, we provide counseling, documentation and processing for abroad study in different countries.  
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
