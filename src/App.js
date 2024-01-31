import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Services from "./component/services/Services";
import OurOffices from "./component/ouroffices/OurOffices";
import NotFound from "./shared/NotFound";
import StudentVisa from "./component/studentVisa/StudentVisa";
import Files from "./component/requardFile/Apply";
import WorkVisa from "./component/workVisa/WorkVisa";
import Details from "./component/home/visatype/Details";
import './App.css';
import { useEffect, useRef, useState } from "react";
import NavBar from "./shared/NavBar";
import { Bounce, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

//europe 4-6month
function App() {
    const [isOPen,setIsOpen] = useState(false)
    const [isOPenDrop1,setIsOpenDrop1] = useState(false)
    const [isOPenDrop2,setIsOpenDrop2] = useState(false)
    const sidemenu = useRef(null)
    const dropMenu1 = useRef(null)
    const dropMenu2 = useRef(null)

    const handleTouchClick = (e) =>{
      if(sidemenu.current && !sidemenu.current.contains(e.target)){
        setIsOpen(false)
      }
    }

    const handleDropTouch1 = (e) =>{
      if(dropMenu1.current && !dropMenu1.current.contains(e.target)){
        setIsOpenDrop1(false)
      }
    }

    const handleDropTouch2 = (e) =>{
      if(dropMenu2.current && !dropMenu2.current.contains(e.target)){
        setIsOpenDrop2(false)
      }
    }

    useEffect(()=>{
      document.addEventListener('click' , handleTouchClick)
      document.addEventListener('click' , handleDropTouch1)
      document.addEventListener('click' , handleDropTouch2)
      return () =>{
        document.removeEventListener('click' , handleTouchClick)
        document.removeEventListener('click' , handleDropTouch1)
        document.removeEventListener('click' , handleDropTouch2)
      }
    },[])

    return (
      <div>
        <NavBar
          isOPen={isOPen}
          setIsOpen={setIsOpen}
          sidemenu={sidemenu}
          isOPenDrop1={isOPenDrop1}
          setIsOpenDrop1={setIsOpenDrop1}
          isOPenDrop2={isOPenDrop2}
          setIsOpenDrop2={setIsOpenDrop2}
          dropMenu1={dropMenu1}
          dropMenu2={dropMenu2}
        />
        <div  className="mt-[10vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/apply" element={<Files />} />
            <Route path="/studentVisa/:region" element={<StudentVisa />} />
            <Route path="/workVisa/:region" element={<WorkVisa />} />
            <Route path="/info/:type" element={<Details />} />
            <Route path="/office" element={<OurOffices />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </div>
  )
}

export default App