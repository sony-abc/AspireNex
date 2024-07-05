import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/Homescreen";
import AboutMe from "./components/Home/AboutMe.jsx";
import ContactMe from "./components/Home/ContactMe";
import Footer from "./components/Home/Footer";
import HeroSection from "./components/Home/Homescreen/index.jsx";
import MyProjects from "./components/Home/MyProjects";
import MySkills from "./components/Home/MySkills";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/AboutMe" element={<AboutMe />} ></Route>
            <Route path="/ContactMe" element={<ContactMe />} ></Route>
            <Route path="/Footer" element={<Footer />} ></Route>
            <Route path="/HeroSection" element={<HeroSection />} ></Route>
            <Route path="/MyProjects" element={<MyProjects/>} ></Route>
            <Route path="/MySkills" element={<MySkills/>} ></Route>
            

            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;