import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./assets/components/nav/Navbar"
import Footer from "./assets/components/footer/Footer"
import Home from "./assets/components/home/Home"
function App() {


  return (
    <>
      
      <Navbar/> 
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />
        </Routes>
        </BrowserRouter>
      <div className="  ">   
<Footer />

      
      </div>
    </>
  );
}

export default App;
