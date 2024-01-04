import React from "react";
import { useState } from "react";
import { Menu,Box,AppBar,Toolbar,styled, Typography,InputBase } from "@mui/material";
import {Facebook,Instagram,Twitter,Menu as MenuIcon} from '@mui/icons-material/';

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
    const SearchBox=styled(Box)({
        display:"flex",
        gap:5,
    })
    const MenuItems=[
    {Name:"Home",Link:"/"},
    {Name:"Products",Link:"#"},
    {Name:"Protfolio",Link:"#"},
    {Name:"Blog",Link:"#"},
    {Name:"Contact Us",Link:"#"},
];
const[open,setOpen]=useState(false)
    return(
        <>
        <AppBar sx={{background:"black"}} position={"static"}> 
            <StyledToolbar>
            <SocialBox>
                <Facebook/>
                <Instagram/>
                <Twitter/>
            </SocialBox>
            
            <MenuBox sx={{display:{xs:"none",sm:"none",md:"flex"}}}>
                {/* <Typography sx={{cursor:"pointer"}}>Home</Typography>
                <Typography sx={{cursor:"pointer"}}>Product</Typography>
                <Typography sx={{cursor:"pointer"}}>Protfolia</Typography>
                <Typography sx={{cursor:"pointer"}}>Blog</Typography>
                <Typography sx={{cursor:"pointer"}}>Contact Us</Typography> */}
              {MenuItems.map((item, index) => (
                    <Typography key={index} sx={{ cursor: "pointer", fontSize:"14px" }}>
                        {item.Name}
                    </Typography>
                    ))}   
                </MenuBox>
              
            <SearchBox>
                <InputBase placeholder="Search ..." sx={{color:"white"}}/>
                <MenuIcon sx={{color:"white",display:{xs:"block",sm:"block",md:"none"}}}
                onClick={()=>setOpen(!open)}/>
            </SearchBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={()=>setOpen(!open)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                 }}
            >
                <Box sx={{width:350,height:"90vh"}}>
                {MenuItems.map((item, index) => (
                    <Typography key={index} sx={{ cursor: "pointer", fontSize:"14px" }}>
                        {item.Name}
                    </Typography>
                    ))}   

                </Box>
                </Menu>

             </AppBar>
        </>
    )
}
export default Navbar