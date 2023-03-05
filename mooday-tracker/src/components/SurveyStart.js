import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function SurveyStart() {
    const sad = () => {
        window.location = "/survey_why_sad";
    };

    const happy = () => {
        window.location = "/survey_why_happy";
    };

    return (
        <div className="surveystartDiv">
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '40vh' }}
        >

            <Grid item xs={4}>
                <Typography variant="h4" component="h2">How are you feeling today?</Typography>
            </Grid>  

            <Grid item sx={{"padding-top": "2vh"}}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Box id="logout">
                        <div style={{
                        display: 'flex',
                        alignItems: 'center'
                        }}>
                        <Button onClick={sad} variant="outlined"  style={{maxWidth: '25vh', maxHeight: '10vh', minWidth: '25vh', minHeight: '10vh'}}>
                            <Typography style={{fontSize: "8ch"}}>😭</Typography>
                        </Button> 
                        <Button onClick={happy} variant="outlined"  style={{marginLeft: "5ch", maxWidth: '25vh', maxHeight: '10vh', minWidth: '25vh', minHeight: '10vh'}}>
                        <Typography style={{fontSize: "8ch"}}>😐</Typography>
                            </Button> 
                        <Button onClick={happy} variant="outlined"  style={{marginLeft: "5ch", maxWidth: '25vh', maxHeight: '10vh', minWidth: '25vh', minHeight: '10vh'}}>
                        <Typography style={{fontSize: "8ch"}}>😀</Typography>
                        </Button> 
                        </div>
                    </Box>
                </div>
            </Grid>  
        </Grid> 
        </div>
    );
}


export default SurveyStart;
