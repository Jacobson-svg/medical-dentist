
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Location from "./pages/Location"
import Page404 from "./pages/Page404"
import Contact from "./pages/Contact"

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/services" element={<Services />} ></Route>
        <Route path="/location" element={<Location />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/404" element={<Page404 />} ></Route>
      </Routes>
    </>
  )
}

export default App
