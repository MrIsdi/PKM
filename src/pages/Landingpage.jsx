import React from "react"
import About from "../components/About"
import Home from "../components/Home"
import Navbar from "../components/Navbar"
import Research from "../components/Research"
import Teams from "../components/Teams"

function Landingpage() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <Teams />
      <Research />
      <About />
    </React.Fragment>
  )
}

export default Landingpage
