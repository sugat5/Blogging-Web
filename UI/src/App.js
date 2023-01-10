import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Home from "./homepage";
import NavBar from "./Components/navbar";
import Createblog from "./Components/createBlog";


function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createblog" element={<Createblog />} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
