import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/EducationProgram/Home.jsx";
import ChildProtection from "./components/EducationProgram/ChildProtection/ChildProtection.jsx";
import Scholarship from "./components/EducationProgram/ScholarShips/Scholarship.jsx";
import Skilldev from "./components/EducationProgram/SkillDevlopment/SkillDevData.jsx";
import Hostels from "./components/EducationProgram/Hostels/Hostels.jsx";
import Schools from "./components/EducationProgram/Schools/Schools.jsx";
import SkilldevForm from "./components/EducationProgram/SkillDevlopment/SkilldevForm.jsx";
import SchoolForm from "./components/EducationProgram/Schools/SchoolForm.jsx";
import ScholarshipForm from "./components/EducationProgram/ScholarShips/ScholarshipForm.jsx";
import HostelForm from "./components/EducationProgram/Hostels/HostelForm.jsx";
import ChildProtectionForm from "./components/EducationProgram/ChildProtection/ChildProtectionForm.jsx";

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

          <Route path="/education-program/skill" element={<Skilldev />} />
          <Route path="/education-program/schools" element={<Schools />} />
          <Route
            path="/education-program/scholarships"
            element={<Scholarship />}
          />
          <Route
            path="/education-program/skill/add"
            element={<SkilldevForm />}
          />
          <Route
            path="/education-program/schools/add"
            element={<SchoolForm />}
          />
          <Route
            path="/education-program/hostel/add"
            element={<HostelForm />}
          />
          <Route
            path="/education-program/scholarship/add"
            element={<ScholarshipForm />}
          />
          <Route
            path="/education-program/child-protection/add"
            element={<ChildProtectionForm />}
          />

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
