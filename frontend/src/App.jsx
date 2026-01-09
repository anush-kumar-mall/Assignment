import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import AllCourses from "./pages/allCourses";
import EnrollCourse from "./pages/enrollPage";
import AllWorkshops from "./pages/allWorkshops"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/enroll" element={<EnrollCourse />} />
        <Route path="/workshops" element={<AllWorkshops />} /> {/* ✅ New route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
