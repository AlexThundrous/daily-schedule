import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./schedule.css"

function Schedule(){
    
   return(
    <div className = "schedule"> <Container maxWidth="md">
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        My Daily Schedule
      </Typography>
      <ul>
        <li>Wake up at 7:30 am</li>
        <li> Go to class 8:00</li>
        <li>Have breakfast at 9:00</li>
        <li>Go to classes again</li>
        <li>Lunch break</li>
        <li>Go to classes</li>
        <li>Snacks and Rest</li>
        <li>Have dinner</li>
        <li>Go for a walk</li>
        <li>Study</li>
        <li> Play games</li>
        <li> Sleep </li>
      </ul>
    </Container> </div>
   )

}

export default Schedule;