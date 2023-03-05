import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
    const signupAction = () => {
        const usernameElem = document.querySelector("#username");
        const passwordElem = document.querySelector("#password");
        const fullnameElem = document.querySelector("#fullname");
        fetch(`http://localhost:8000/api/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: fullnameElem.value, username: usernameElem.value, password: passwordElem.value})
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                const result = res;
                if (res.code == 200) {
                    alert("successful creation");
                } else {
                    alert("failed acc creation");
                }
            })
    };

    return (
        <div className="SignupDiv">
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '40vh' }}
        >

            <Grid item xs={4}>
                <Typography variant="h4" component="h2">Create your account!</Typography>
            </Grid>  
            <Grid item xs={4}>
                <TextField sx={{width: "30vh"}} id="fullname" label="full name" variant="standard" />
            </Grid> 
            <Grid item xs={4}>
                <TextField sx={{width: "30vh"}} id="username" label="username" variant="standard" />
            </Grid>   
            <Grid item sx={4}>
                <TextField sx={{width: "30vh"}} id="password" label="password" type="password" variant="standard" />
            </Grid>  
            <Grid item sx={{"padding-top": "2vh"}}>
                <Button onClick={signupAction} variant="contained">Signup</Button>
            </Grid>  
        </Grid> 
        </div>
    );
}


export default Login;
