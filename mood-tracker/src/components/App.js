//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Container>
      <Box>
        <Typography variant="h4">Mooday</Typography>
      </Box>
      </Container>

      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
