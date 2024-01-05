import React from "react"
// import cardImage from "../image3.jpg"

import {Box,CardContent,CardMedia,Typography} from "@mui/material"
const Card=({cardImage})=>{
    return(
        <>
        <Box>
            {" "}
        <CardMedia
        component="img"
        height="500"
        image={cardImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="body1" align="center" component="div" color={"tomato"}>
          PERFUME
        </Typography>
        <Typography gutterBottom variant="h5" align="center" component="div" >
          Wearing this will  make everyone love you
        </Typography>
        <Typography gutterBottom variant="body2" align="center" component="div" color="text.secondary" >
        It's women love
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
        </Box>
        </>
    )
}
export default Card 