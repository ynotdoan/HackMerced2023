import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function TextPrompt() {
    const loginAction = () => {
        fetch()
    };

    return (
        <div className="TextPromptDiv">
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '40vh' }}
        >

            <Grid item xs={4}>
                <Typography variant="h4" component="h2">Why are you feeling this way?</Typography>
            </Grid>  
            <Grid item xs={4}>
                <TextField   multiline
  rows={10}
  maxRows={40} style={{width: "80vh"}} id="username" label="Type here" variant="standard" />
            </Grid>   

            <Grid item sx={{"padding-top": "2vh"}}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Button onClick={loginAction} variant="contained">Submit</Button> 

                </div>
            </Grid>  
        </Grid> 
        </div>
    );
}


export default TextPrompt;
