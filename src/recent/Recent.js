import React from "react";
import {  Box, Grid } from "@mui/material";
import cardImage from "../Static/image3.jpg";
import Card from "../Component/Card/Card";
const Recent = () => {
    return (
        <Box>
            <Grid container rowSpacing={1} columnSpacing={1}>
                <Grid item lg={12} sx={{height:"700"}}>
                    <Card  cardImage={cardImage}/>
                </Grid>
              
                <Grid item xs={6} >
                    <Card cardImage={cardImage}/>
                      
                </Grid>
                <Grid item xs={6} >
                    <Card cardImage={cardImage}/>
                      
                </Grid> <Grid item xs={6} >
                    <Card cardImage={cardImage}/>
                      
                </Grid> 
                <Grid item xs={6}>
                    <Card cardImage={cardImage}/>
                      
                </Grid>
            </Grid>
        </Box>
    );
};

export default Recent;
