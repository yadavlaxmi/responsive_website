import { CardMedia,CardContent,List,ListItem,ListItemAvatar,ListItemText,Avatar,Typography,Box,Divider} from "@mui/material"
// import postImage1 from "../../Static/image1.png"
import postImage2 from "../../Static/image2.jpeg"
import postImage3 from "../../Static/image3.jpg"
import postImage4 from "../../Static/image4.jpg"

import React from "react"
const Rightbar=()=>{
    return(
        <>
        <Box>
            <Typography align="center" bgcolor={"black"} color="white">
                Most Popular
            </Typography>
        <List sx={{ width: '100%',height:"100%", maxWidth: 360, bgcolor: 'background.paper' }}>

      <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar sx={{height:80, width:80}} variant="square" alt="Remy Sharp" src={postImage2} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            
              " — I'll be in your neighborhood doing errands this…"
          }
        />
      </ListItem> 
       <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar sx={{height:80, width:80}} variant="square" alt="Remy Sharp" src={postImage3} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            
              " — I'll be in your neighborhood doing errands this…"
          }
        />
      </ListItem>
      <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar sx={{height:80, width:80}} variant="square" alt="Remy Sharp" src={postImage4} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            
              " — I'll be in your neighborhood doing errands this…"
          }
        />
      </ListItem>
      <Divider variant="insert" component={"li"}/>
      </List>
      <Typography align="center" bgcolor={"black"} color="white">
                About Us
            </Typography>
            {/* <Card  cardImage={postImage3}/> */}
            <CardMedia
              xs={12} md={6} 
        component="img"
        height="100"
        image={postImage3}
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
export default  Rightbar