import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Landingpage from "./pages/Landingpage"
import Livecam from "./components/Livecam"
import AOS from "aos"
import "aos/dist/aos.css"
import DashboardCam from "./pages/DashboardCam"

function App() {
  useEffect(() => {
    AOS.init({
      // Global settings and options here
      duration: 1000, // Animation duration
    })
  }, [])
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/sensor" element={<Dashboard />} />
          <Route path='/livecam' element={<DashboardCam/>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
