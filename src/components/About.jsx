import React from "react"
import ig from "../assets/ig.png"

function About() {
  return (
    <React.Fragment>
      <section className="mt-72" id="About Research">
        <a
          href="/dashboard"
          className="block w-fit mx-auto px-6 py-3 rounded-lg lg:text-4xl text-xl text-white hover:text-black font-bold text-center bg-[#EB8916] hover:shadow-[0px_3px_13px_3px_#EB7C16] transition ease-in-out delay-50"
        >
          LINK TO DASHBOARD
        </a>
        <div className="flex justify-center items-center mt-32 h-[200px] rounded-t-[50px] border border-[#ffffff69] bg-[#ffffff29] backdrop-blur-[10px]">
          <a
            href="https://www.instagram.com/pkmkc_cvtomato/"
            target="_blank"
            className="flex items-center "
          >
            <img src={ig} alt="" />
            <span className="font-bold">@pkmkc_cvtomato</span>
          </a>
        </div>
      </section>
    </React.Fragment>
  )
}

export default About
