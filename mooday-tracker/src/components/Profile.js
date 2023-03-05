import React, { useState, useEffect } from "react";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const Friend = () => {
  return (
    <Box sx={{ paddingLeft:"2vh", paddingRight:"2vh", paddingTop: "1vh", maxWidth: "12vh",border: '1px dashed grey' }}>
    <Grid
      container
      spacing={0}
      direction="column">
      <center>
        <img width="50vh" src="https://cdn.discordapp.com/attachments/903127962826719262/1081742329641189386/latest.png" />
      </center>
      <Link href="/p/friend" noWrap>Friend</Link> 
    </Grid>
  </Box>
  );
}

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

function Profile() {
  const logout = () => {

  }
  return (
    <center>
    <Container maxWidth="md" sx={{paddingTop:"5vh"}}>
    <Box sx={{ border: '1px dashed grey' }}>
    <Box sx={{ padding: "1vh", marginTop: "2vh", marginLeft:"-60vh", maxWidth: "40vh", border: '1px dashed grey' }}>
      <div style={{
            display: 'flex',
            alignItems: 'center'
        }}><img width="80vh" src="https://cdn.discordapp.com/attachments/903127962826719262/1081742329641189386/latest.png" />
        <div style={{paddingLeft: "5vh", textAlign: "right"}}>
        <Typography noWrap>Person Fullname</Typography>
        <Typography noWrap>username123</Typography>
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