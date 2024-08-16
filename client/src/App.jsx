import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/EducationProgram/Home.jsx";
import ChildProtection from "./components/EducationProgram/ChildProtection/ChildProtection.jsx";
import Scholarship from "./components/EducationProgram/ScholarShips/Scholarship.jsx";
import Skilldev from "./components/EducationProgram/SkillDevlopment/Skilldev.jsx";
import Hostels from "./components/EducationProgram/Hostels/Hostels.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/education-program" element={<Home />} />
          <Route path="/education-program/hostels" element={<Hostels />} />
          <Route
            path="/education-program/child-protection"
            element={<ChildProtection />}
          />
          <Route
            path="/education-program/scholarships"
            element={<Scholarship />}
          />
          <Route path="/education-program/skills" element={<Skilldev />} />

          <Route
            path="/education-program/scholarships"
            element={<Scholarship />}
          />

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;