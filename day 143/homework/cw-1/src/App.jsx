import { Routes, Route } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"

function App() {

  return (

    <Routes>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Services" element={<Services/>}/>
    </Routes>

  )
}

export default App
