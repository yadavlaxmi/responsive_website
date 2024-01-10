import { Box, Container ,Stack} from "@mui/material"
import Hero from "../Hero/Hero"
import Categories from "../category/Categories"
import React from "react"
import Recent from "../../recent/Recent"
import Rightbar from "../Rightbar/Rightbar"
const Home =()=>{
    return(
        <>
        <Box>
        <Hero/>
        <Container>
            <Categories/>
            <hr/>
            <Stack direction={"row"} spacing={8} mt={8}>
                <Box flex={3} sx={{padding:"18px 100px 100px 100px"}}>
                <Recent/>
                </Box>
                <Box flex={1}>
                   <Rightbar/> 
                </Box>
            </Stack>
            </Container>
        </Box>
        </>
    )
}
export default Home