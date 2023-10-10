import React, {useState} from 'react'
import logo from '../assets/logo.png'

function MobileView({menu, display}){
    return(
        <React.Fragment>
            <div className={`${display} basis-1/2 justify-evenly flex-col text-center delay-300`}>
                {
                    menu.map((data, i)=>(
                        <a href="#" key={i} className={`font-medium lg:py-0 py-3 text-white`}>{data}</a>
                    ))
                }
            </div>
        </React.Fragment>
    )
}

function Navbar() {
    const [burger, setBurger] = useState(false)
    const menu = [ "Home", "About", "Teams", "Research" ]

    const handleBurger = () =>{
        burger === false ? setBurger(true) : setBurger(false)
    }
    return (
        <React.Fragment>
            <nav className={`lg:container lg:px-0 px-[16px] flex mx-auto justify-between items-center`}>
                <div className={`flex items-center`}>
                    <img src={logo} alt="CVTOMATO" />
                    <div>
                        <p className="text-xs text-white">PKM - KC</p>
                        <p className='text-2xl font-bold text-white'>CV TOMATO</p>
                        <p className="text-xs text-white">Universitas Andalas</p>
                    </div>
                </div>
                <div className={`lg:flex basis-1/2 justify-evenly hidden`}>
                    {
                        menu.map((data, i)=>(
                            <a href="#" key={i} className={`font-medium text-white`}>{data}</a>
                        ))
                    }
                </div>
                <button type='button' className='lg:hidden delay-300' onClick={handleBurger}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </nav>
            { burger? <MobileView menu={menu} display={"flex"} />:<MobileView menu={menu} display={"hidden"} />}
        </React.Fragment>
    )
}

export default Navbar
