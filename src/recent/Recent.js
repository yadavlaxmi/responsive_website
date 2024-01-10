import React from "react";
import {  Box, Grid } from "@mui/material";
import cardImage from "../Static/image3.jpg";
import postImage2 from "../Static/image2.jpeg"
import postImage3 from "../Static/image3.jpg"
import postImage4 from "../Static/image4.jpg"

import Card from "../Component/Card/Card";
const Recent = () => {
    return (
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{xs:1,sm:2, md:1}}>
                <Grid item >
                    <Card  cardImage={cardImage}/>
                </Grid>
              
               
                <Grid item md={6} xs={12} >
                    <Card cardImage={postImage2}/>
                      
                </Grid>
                 <Grid item md={6} xs={12}>
                    <Card cardImage={postImage3}/>
                      
                </Grid> 
                <Grid item md={6} xs={12}>
                    <Card cardImage={postImage4}/>
                      
                </Grid>
                <Grid item md={6} xs={12}>
                    <Card cardImage={cardImage}/>
                      
                </Grid>
            </Grid>
        </Box>
    );
};

export default Recent;
