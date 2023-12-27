import React from "react";
import { Box,AppBar,Toolbar,styled, Typography } from "@mui/material";
import {Facebook,Instagram,Twitter} from '@mui/icons-material/';

const Navbar=()=>{
    const StyledToolbar=styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between",


    })
    const SocialBox=styled(Box)({
        display:"flex",
        gap:10
    })
    const MenuBox=styled(Box)({
        display:"flex",
        gap:30
    })
    return(
        <>
        <AppBar> 
            <StyledToolbar>
            <SocialBox>
                <Facebook/>
                <Instagram/>
                <Twitter/>
            </SocialBox>
            <MenuBox>
                <Typography sx={{cursor:"pointer"}}>Home</Typography>
                <Typography sx={{cursor:"pointer"}}>Product</Typography>
                <Typography sx={{cursor:"pointer"}}>Protfolia</Typography>
                <Typography sx={{cursor:"pointer"}}>Blog</Typography>
                <Typography sx={{cursor:"pointer"}}>Contact Us</Typography>

                </MenuBox>
            <Box>Search</Box>
            </StyledToolbar>
             </AppBar>
        </>
    )
}
export default Navbar