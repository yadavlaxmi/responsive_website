import { Box,Stack,Typography,styled } from "@mui/material"
import React from "react";
import {Facebook,Instagram,Twitter} from '@mui/icons-material/';

const SocialBox=styled(Box)({
    display:"flex",
    gap:10,
    color:"white"
})
const Footer=()=>{

    return(
        <>
            <Box sx={{background:"black", height:"250px"}}>
                <Stack direction={{xs:"row",md:"row"}} p={7}>
                    <Box flex={1}>
                        <Typography color={"white"} align={"center"}>
                            contact Us
                        </Typography>
                        <Typography color={"white"} align={"center"}>
                            of squamate reptiles
                        </Typography>
                        <Typography color={"white"} align={"center"}>
                            continents except Antarctica
                        </Typography>
                        <Typography color={"white"} align={"center"}>
                            ranging across
                        </Typography>
                
                    </Box>
                    <Box flex={1}>
                        <Typography color={"white"} align={"center"}>
                            Data policy
                        </Typography>
                    
                        <Typography color={"white"} align={"center"}>
                            cookies
                        </Typography>
                        <Typography color={"white"} align={"center"}>
                            Data safety
                        </Typography>
                    </Box>
                    <Box flex={1}>
                        <Typography color={"white"}  align={"center"}>
                                categries
                        </Typography>       
                        <Typography color={"white"} variant={"body2"} align={"center"}>
                                Kids
                        </Typography>  
                        <Typography color={"white"} variant={"body2"} align={"center"}>
                                Women
                        </Typography>
                        <Typography color={"white"} variant={"body2"} align={"center"}>
                                Men
                        </Typography>
                    </Box>
                    <Box>
                    <Typography color={"white"}  align={"center"}>
                                Follow us
                        </Typography>
                        <SocialBox>
                            <Facebook/>
                            <Instagram/>
                             <Twitter/>
                        </SocialBox>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}
export default Footer 