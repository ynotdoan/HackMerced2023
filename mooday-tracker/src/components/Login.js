import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
    const loginAction = () => {
        const usernameElem = document.querySelector("#username");
        const passwordElem = document.querySelector("#password");
        fetch(`http://localhost:8000/api/login?username=${usernameElem.value}&password=${passwordElem.value}`)
            .then((res) => res.json()).then((res) => {
                console.log(res);
                window.localStorage.setItem("username", "Andrew12345");
                window.localStorage.setItem("fullname", "Andrew Andrew");
            });
        
        // window.location = "/dashboard";
    };

    return (
        <div className="LoginDiv">
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '40vh' }}
        >

            <Grid item xs={4}>
                <Typography variant="h4" component="h2">Welcome to Mooday Tracker!</Typography>
            </Grid>  
            <Grid item xs={4}>
                <TextField sx={{width: "30vh"}} id="username" label="username" variant="standard" />
            </Grid>   
            <Grid item sx={4}>
                <TextField sx={{width: "30vh"}} id="password" label="password" type="password" variant="standard" />
            </Grid>  
            <Grid item sx={{"padding-top": "2vh"}}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Button onClick={loginAction} variant="contained">Login</Button> <Typography sx={{"padding-left": "3ch"}}> or </Typography>
                    <Link href="/signup" underline="always" sx={{"padding-left": "3ch"}}>
                        Sign Up
                    </Link>
                </div>
            </Grid>  
        </Grid> 
        </div>
    );
}


export default Login;
