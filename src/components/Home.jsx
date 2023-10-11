import React from "react"
import { Link } from "react-scroll"
import tomato from "../assets/tomato.jpg"

function Home() {
  return (
    <React.Fragment>
      <section
        className="lg:container flex mx-auto mt-[138px] px-5 justify-between"
        id="Home"
      >
        <div className="lg:basis-1/2 basis-full">
          <p className="lg:text-4xl text-base text-[#E8E8E8]">
            Selamat Datang di
          </p>
          <p className="lg:text-6xl text-3xl font-bold text-white">
            PEMANFAATAN COMPUTER VISION SEBAGAI PEMANTAUAN DAN PENGENDALIAN
            BIBIT TANAMAN TOMAT BERBASIS IOT
          </p>
          <Link
            to="About Research"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className="cursor-pointer w-[214px] h-[49px] rounded-[18px] bg-[#EB7C16] text-white flex lg:text-2xl text-xl justify-center items-center shadow-[0px_3px_13px_3px_#EB7C16] mt-11"
          >
            See More
          </Link>
        </div>
        <div
          className={`lg:block basis-1/2 p-10 hidden w-fit rounded-[48px] border border-[#ffffff69] bg-[#ffffff29] backdrop-blur-[10px] bg-cover`}
        >
          <img src={tomato} alt="" />
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home
