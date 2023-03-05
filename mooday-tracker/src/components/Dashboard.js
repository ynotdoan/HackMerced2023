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

const DaySquare = () => {
  return (
  <Box sx={{ paddingLeft:"2vh", paddingRight:"2vh", paddingTop: "1vh", maxWidth: "12vh",border: '1px dashed grey' }}>
    <Grid
      container
      spacing={0}
      direction="column">
      <center>
        <Box
        sx={{
          width: "3ch",
          height: "3ch",
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }} />      
      </center>
      <Typography>Sun</Typography>
    </Grid>
  </Box>
  );
}

function Dashboard() {
  const logout = () => {

  }
  const name = window.localStorage.getItem("fullname");
  const username = window.localStorage.getItem("username");

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
        <Typography noWrap>{name}</Typography>
        <Typography noWrap>{username}</Typography>
        <Link href="/profile" noWrap>View Profile</Link> 
        </div>
        </div>
      
    </Box>

    <Typography style={{marginLeft: "-80vh", paddingTop: "5vh", marginBottom:"-7vh"}} noWrap>Your Friends' Moods</Typography>
    <Typography style={{marginLeft: "10vh", paddingTop: "4.5vh", marginBottom:"-7vh"}} noWrap>Past Week's Moods</Typography>
      
    <Box id="friends" style={{marginLeft: "4vh", paddingTop: "8vh", marginBottom: "2vh"}}>
      <div style={{
          display: 'flex',
          alignItems: 'center'
      }}>
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
    </Box>

    <Box id="logout" style={{marginLeft: "60vh", marginTop:"-32vh", paddingBottom: "20vh", marginBottom: "2vh"}}>
      <Button  color="error" onClick={logout} variant="contained"  style={{maxWidth: '25vh', maxHeight: '10vh', minWidth: '25vh', minHeight: '10vh'}}>Logout</Button> 
    </Box>

    <Box id="week" style={{marginLeft: "50vh", marginTop: "-10vh", marginBottom: "2vh"}}>
      <div style={{
          display: 'flex',
          alignItems: 'center'
      }}>
        <DaySquare/>
        <DaySquare/>
        <DaySquare/>
        <DaySquare/>
        <DaySquare/>
        <DaySquare/>
        <DaySquare/>
      </div>
    </Box>

    </Box>
    </Container>
    </center>
  );
}

export default Dashboard;