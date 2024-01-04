import React from "react";
import { Box, Grid } from "@mui/material";
const Recent=()=>{
    return(
        <>
            <Box>
                <Grid container>
                    <Grid item md={6} sx={{background:"tomato"}}>
                        item1
                    </Grid>
                    <Grid item md={3} sx={{background:"blue"}}>
                        item2
                    </Grid>
                    <Grid item md={3} sx={{background:"green"}}>
                        item3
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}
export default Recent