//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import TextPrompt from "./TextPrompt";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './App.css';

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

          <Route path="/survey" element={<Login />}/>
          <Route path="/survey_why" element={<TextPrompt />}/>
          <Route path="/survey_for_against" element={<Login />}/>
          <Route path="/survey_balance" element={<Login />}/>

          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
