//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import SurveyStart from "./SurveyStart";
import TextPrompt from "./TextPrompt";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './App.css';
import SurveyDone from "./SurveyDone";

function App() {
  return (
    <div className="wrapper">
      <Container>
      <Box>
        <Typography variant="h2">Mooday :D</Typography>
      </Box>
      </Container>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<Profile />}/>

          <Route path="/p/stanley" element={<Profile fullname="Stanley Y." username="stanley123"  imgurl='https://cdn.discordapp.com/attachments/903127962826719262/1081825972921311282/latest.png'/>}/>
          <Route path="/p/jason" element={<Profile fullname="Jason G." username="JasonG123" imgurl="https://cdn.discordapp.com/attachments/903127962826719262/1081826471905083454/latest.png"/>}/>
          <Route path="/p/tony" element={<Profile fullname="Tony D." username="Tony123" imgurl="https://cdn.discordapp.com/attachments/903127962826719262/1081826644953669682/latest.png"/>}/>
          <Route path="/p/bob" element={<Profile fullname="Bob Builder" username="BobBuilder" imgurl="https://cdn.discordapp.com/attachments/903127962826719262/1081826904459464704/latest.png"/>}/>


          <Route path="/survey_start" element={<SurveyStart/>}/>
          <Route path="/survey_why_happy" element={<TextPrompt next="/survey_done" prompt="Why are you feeling this way?"/>}/>
          <Route path="/survey_why_sad" element={<TextPrompt next="/survey_for_against" prompt="Why are you feeling this way?"/>}/>
          <Route path="/survey_for_against" element={<TextPrompt next="/survey_balance" prompt="Do you agree with how you feel (for/against)?"/>}/>
          <Route path="/survey_balance" element={<TextPrompt next="/survey_done" prompt="Balance how you feel."/>}/>
          <Route path="/survey_done" element={<SurveyDone/>}/>

          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
