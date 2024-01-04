import React from "react"
import kidsImages from "../../Static/Kids.jpg";
import WomenImages from "../../Static/women.jpg";
import menImages from "../../Static/men.jpg"

import { Box,Stack, Typography,styled } from "@mui/material"
const StyledBox=styled(Box)({
    height:300,
    width:"100%",
    cursor:"pointer",
    backgroundRepeat:"no-reapeat",
    backgroundPosition:"center center",
    backgroundSize:"cover"
});
const StyledTypography=styled(Typography)({
    margin:"25% 50px 25% 50px",
    background:"white",
    opacity:"0.8"
})
const Categories=()=>{
    return(
        <>
        <Box>
            <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:1,sm:2,md:4}} mt={5}>
                <StyledBox sx={{background:`url(${kidsImages})`}}><StyledTypography align="center" variant="h3">Kids</StyledTypography></StyledBox>
                <StyledBox sx={{background:`url(${menImages})`}}><StyledTypography align="center" variant="h3">Men</StyledTypography></StyledBox>
                <StyledBox sx={{background:`url(${WomenImages})`}}><StyledTypography align="center" variant="h3">Women</StyledTypography></StyledBox>
            </Stack>
        </Box>
        </>
    )
}
export default Categories