import { Box, CardMedia, Typography,Stack,Container } from "@mui/material"
import detailImage from "../../Static/image3.jpg"
import postImage from "../../Static/image1.png"
import Rightbar from "../Rightbar/Rightbar"
 
const Details=()=>{
    return(
        <>
            <Box>
                <Box sx={{
                    backgroundImage:`url(${detailImage})`,
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    height:"250px",


                }}>
                    <Typography
                    align="center"
                    color={"black"}
                    variant="h2"
                    sx={{fontWeight:800,padding:10}}>
                        Clicked Posts Title 
                    </Typography>

                </Box>
                <Container>
                    <hr/>
                    <Stack 
                    direction={{xs:"column",md:"row"}}
                        spacing={{xs:1,sm:2,md:8}}
                         mt={8} >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                        <Box flex={3} sx={{padding:"18px 100px 100px 100px"}}>
                            <Typography
                            m={4}
                            align="center"
                            color={"gray"}
                            variant="body1"
                            sx={{fontWeight:900}}>
                                Lorem isum dolor sit amet,consectetur adipisicing elit,Autlaudantium voluptates
                                querat,excepturi solute quos repudiadae consequutnur? Magman labore blanditiis enim
                                laborum atque nulla veniuam impedit necessitatibus totam,sed quibusdam? lorea ipsum doalor sit 
                                amet,consectur adipisicing elit Aut laudantium voluptates
                                queras ,excepturi solute ques repundianisas
                            </Typography>
                            <CardMedia
                            component={"img"}
                            height="300px"
                            image={postImage}
                            alt="green iganue"
                            />

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
export default Details