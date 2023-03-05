import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SurveyDone() {
    const gobackAction = () => {
        window.location = "/dashboard"
    };

    return (
        <div className="surveydoneDiv">
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '40vh' }}
        >

            <Grid item xs={4}>
                <Typography variant="h4" component="h2">Completed Today's Survey</Typography>
            </Grid>  

            <Grid item sx={{"padding-top": "2vh"}}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Button onClick={gobackAction} variant="contained">Return Home</Button> 

                </div>
            </Grid>  
        </Grid> 
        </div>
    );
}


export default SurveyDone;
