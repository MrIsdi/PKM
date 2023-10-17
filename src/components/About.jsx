import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <React.Fragment>
      <section className="mt-72" id="About Research">
        <a
          href="/livecam"
          className="block w-fit mx-auto px-10 py-3 rounded-full lg:text-3xl text-xl text-white  font-bold text-center bg-[#EB8916] hover:shadow-[0px_3px_13px_3px_#EB7C16] transition ease-in-out delay-50"
        >
          LINK TO DASHBOARD
        </a>
        <div className="flex flex-col justify-center text-white items-center mt-32 h-[120px] rounded-t-[50px] border border-[#ffffff69] bg-[#ffffff29] backdrop-blur-[10px]">
          <div className="flex flex-col justify-center items-center">
            <p>
              &copy; 2023 Tim PKM-KC Universitas Andalas. All rights reserved.
            </p>
            <p>Padang, Sumatra Barat</p>
          </div>
          <a
            href="https://www.instagram.com/pkmkc_cvtomato/"
            target="_blank"
            className="flex items-center gap-2 text-center"
          >
            <FontAwesomeIcon icon={faInstagram} size="xl"/>
            <span className="font-semibold">@pkmkc_cvtomato</span>
          </a>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;
