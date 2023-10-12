import React from 'react'
import About from '../components/About'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Research from '../components/Research'
import Teams from '../components/Teams'
import bg from "../assets/bg.png"

function Landingpage() {
    document.body.style.background = `url(${bg})`
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
