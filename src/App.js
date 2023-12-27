import { Box,Container,Stack} from "@mui/material";

function App() {
  return (
<>
    <Box>
      hello
    </Box>
    <Container sx={{background:"tomato"}}>
        Hello
    </Container>
    <Stack sx={{background:"tomato"}}>
      <Box>Box1</Box>
      <Box>box2</Box>
      <Box>box3</Box>
    </Stack>
    </>
   
  );
}

export default App;
