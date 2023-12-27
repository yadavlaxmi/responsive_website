import { Box,Stack} from "@mui/material";

function App() {
  return (
<>
    <Box>
      hello
    </Box>
    {/* <Container sx={{background:"tomato"}}>
        Hello
    </Container> */}
    <Stack 
    direction={"row"} 
    justifyContent="space-between"
    alignItems="center"
    spacing={2}
    >
      <Box flex={1} sx={{background:"tomato"}}>Box1</Box>
      <Box flex={5} sx={{background:"blue"}}>box2</Box>
      <Box flex={2} sx={{background:"green"}}>box3</Box>
    </Stack>
    </>
   
  );
}

export default App;
