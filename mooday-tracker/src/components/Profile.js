import React, { useState, useEffect } from "react";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


const DaySquare = (props) => {
  const mood = props.mood || 0;
  let color;
  if (mood == 0) {
    color = "#FFFFFF";
  } else if (mood == 1) {
    color = "#FF0000";
  } else if (mood == 2) {
    color = "#00FFFF";
  } else if (mood == 3) {
    color = "#00FF00";
  }
  
  return (
  <Box sx={{ paddingLeft:"0vh", marginRight:"0.2vh", marginBottom: "0.2vh", marginTop: `0vh`, maxWidth: "12vh",border: '1px dashed grey' }}>
    <Grid
      container
      spacing={0}
      direction="column">
      <center>
        <Box
        sx={{
          width: "3ch",
          height: "3ch",
          backgroundColor: color,
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.7, 0.5]
          },
        }} />      
      </center>
    </Grid>
  </Box>
  );
}

function Profile(props) {
  const username = props.username;
  const fullname = props.fullname;

  return (
    <center>
    <Container maxWidth="md" sx={{paddingTop:"5vh"}}>
    <Box sx={{ border: '1px dashed grey' }}>
    <Box sx={{ padding: "1vh", marginTop: "2vh", marginLeft:"-60vh", maxWidth: "40vh", border: '1px dashed grey' }}>
      <div style={{
            display: 'flex',
            alignItems: 'center'
        }}><img width="80vh" src={props.imgurl} />
        <div style={{paddingLeft: "5vh", textAlign: "right"}}>
        <Typography noWrap>{username}</Typography>
        <Typography noWrap>{fullname}</Typography>
        <Link href="/dashboard" noWrap>Go Back</Link> 
        </div>
        </div>
      
    </Box>

    <Typography style={{marginLeft: "40vh", paddingTop: "-50vh", marginTop:"-10vh", marginBottom:"20vh"}} noWrap>Last 30 Days</Typography>      

    <Box id="week" style={{marginLeft: "60vh", marginTop: "-17vh", marginBottom: "2vh"}}>
      <div id="cal0" style={{
          display: 'flex',
          alignItems: 'center'
      }}>
        <DaySquare mood="1" />
        <DaySquare mood="2" />
        <DaySquare mood="3" />
        <DaySquare mood="1" />
        <DaySquare mood="0" />
        <DaySquare mood="0" />
        <DaySquare mood="0" />
      </div>
      <div id="cal1" style={{
          display: 'flex',
          alignItems: 'center'
      }}>
        <DaySquare mood="0" />
        <DaySquare mood="0" />
        <DaySquare mood="0" />
        <DaySquare mood="0" />
        <DaySquare mood="0" />
        <DaySquare mood="0" />
        <DaySquare mood="0" />
      </div>
      <div id="cal2" style={{
          display: 'flex',
          alignItems: 'center'
      }}>
        <DaySquare mood="0" />
        <DaySquare mood="0" />
        <DaySquare mood="0" />
        <DaySquare mood="0" />
        <DaySquare mood="0" />
        <DaySquare mood="0" />
        <DaySquare mood="0" />
      </div>
      <div id="cal3" style={{
          display: 'flex',
          alignItems: 'center'
      }}>
        <DaySquare mood="0" />
        <DaySquare mood="0" />
        <DaySquare mood="0" />
        <DaySquare mood="0" />
        <DaySquare mood="0" />
        <DaySquare mood="0" />
        <DaySquare mood="0" />
      </div>
      <div id="cal4" style={{
          display: 'flex',
          alignItems: 'center'
      }}>
        <DaySquare mood="0" />
        <DaySquare mood="0" />
      </div>
    </Box>

    </Box>
    </Container>
    </center>
  );
}

export default Profile;