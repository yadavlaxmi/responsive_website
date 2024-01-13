import Navbar from "./Component/Navbar";
import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Details from "./Component/Details/Details";
function App() {
  return (
<>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details" element={<Details/>}/>
    </Routes>
    </BrowserRouter>
   {/* <Home/> */}
   <Footer/>
    </>
   
  );
}

export default App;
