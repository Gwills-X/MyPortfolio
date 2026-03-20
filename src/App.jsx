import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectsDetails from "./pages/ProjectsDetails";
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <div className='pt-10'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects/:id' element={<ProjectsDetails />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
