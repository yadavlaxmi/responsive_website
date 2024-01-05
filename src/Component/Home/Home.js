import { Box, Container ,Stack} from "@mui/material"
import Hero from "../Hero/Hero"
import Categories from "../category/Categories"
import React from "react"
import Recent from "../../recent/Recent"
const Home =()=>{
    return(
        <>
        <Box>
        <Hero/>
        <Container>
            <Categories/>
            <hr/>
            <Stack direction={"row"} spacing={2}>
                <Box>
                <Recent/>
                </Box>
                <Box>
                   Rightbar 
                </Box>
            </Stack>
            </Container>
        </Box>
        </>
    )
}
export default Home