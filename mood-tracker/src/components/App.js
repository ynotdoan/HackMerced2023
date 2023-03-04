//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="wrapper">
      <h1></h1>
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
