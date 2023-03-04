//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [data, setdata] = useState({
    name: "",
    age: 0,
    date: "",
    programming: "",
});

// Using useEffect for single rendering
useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("/data").then((res) =>
        res.json().then((data) => {
            // Setting a data from api
            setdata({
                name: data.Name,
                age: data.Age,
                date: data.Date,
                programming: data.programming,
            });
        })
    );
}, []);

  return (
    <div className="App">
       <h1>
        <p>Welcome to Mooday Tracker!</p>
        <br></br>
        <br></br>
        <p>Log in</p>
      </h1>

      <input type="text" class="username" id = "username" name="username" placeholder="Username"></input>
      <br></br>
      <input type="password" class="password" id = "password" name="password" placeholder="Password"></input>
      <br></br> 
      <br></br>
      <button class="login" onclick="login()">Log In</button>
      <br></br> 
      <br></br>
      <button class="login" onclick="loadAdmin()">Log In as Admin</button>
      <br></br> 
      <br></br>
      <button class="login" onclick="register()">Don't have an Account? Register Now!</button>
      <p>{data.name}</p>
      <p>{data.age}</p>
      <p>{data.date}</p>
      <p>{data.programming}</p>
    </div>
  );
}

export default App;
