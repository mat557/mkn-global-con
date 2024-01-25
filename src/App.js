import { Route, Routes } from "react-router-dom";
import NavBar from "./shared/NavBar";
import Home from "./component/home/Home";
import Contact from "./component/contact/Contact";
import About from "./component/about/About";
import Services from "./component/services/Services";
import OurOffices from "./component/ouroffices/OurOffices";
import NotFound from "./shared/NotFound";
import StudentVisa from "./component/studentVisa/StudentVisa";
import Files from "./component/requardFile/Files";
import WorkVisa from "./component/workVisa/WorkVisa";
import Details from "./component/home/visatype/Details";
import './App.css';

// #476D81
function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/files" element={<Files />} />
          <Route path="/studentVisa/:region" element={<StudentVisa />} />
          <Route path="/workVisa/:region" element={<WorkVisa />} />
          <Route path="/info/:type" element={<Details />} />
          <Route path="/office" element={<OurOffices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default App