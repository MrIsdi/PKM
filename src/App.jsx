import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Landingpage from "./pages/Landingpage"
import Livecam from "./components/Livecam"
import AOS from "aos"
import "aos/dist/aos.css"
import Data from "./components/Data"

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/dashboard/livecam' element={<Livecam/>} />
          <Route path='/dashboard/data-tumbuhan' element={<Data />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
