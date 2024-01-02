import { Route, Routes } from "react-router-dom";
import NavBar from "./shared/NavBar";
import Home from "./component/home/Home";
import Contact from "./component/contact/Contact";
import About from "./component/about/About";
import Services from "./component/services/Services";
import Universities from "./component/universities/Universities";
import OurOffices from "./component/ouroffices/OurOffices";
import NotFound from "./shared/NotFound";


function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/office" element={<OurOffices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default App