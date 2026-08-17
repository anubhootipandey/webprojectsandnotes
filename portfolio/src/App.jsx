import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/header" element={<Header />} />
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/education" element={<Education/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
};

export default App;
