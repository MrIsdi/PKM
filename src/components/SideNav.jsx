import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function SideNav() {
  useEffect(() => {
    const url = window.location.href;

    const buttonSideBar = document.querySelectorAll(".url");
    buttonSideBar.forEach((a) => {
      if (a.href == url) {
        a.classList.add("shadow-[-1px_-1px_28px_0px_rgb(235,124,22)]");
      }
    });
  }, []);
  return (
    <React.Fragment>
      <div className="w-[250px] h-[100%] fixed bg-[#2d2d2d73] backdrop-blur-[100px] flex flex-col justify-between">
        <div className=" flex flex-col items-center justify-start ">
          <div className="pt-4 ">
            {/* Head Side Nav  */}
            <div className="text-center text-white pt-5 mb-5">
              <img src={logo} alt="" className="mx-auto" />
              <p className="font-bold">PKM KC CV-Tomato</p>
              <p>Official Website</p>
            </div>
            {/* Button SideNav */}
            <div className="flex flex-col items-center justify-center">
              <Button
                text="Live Cam"
                link="/livecam"
                style="w-[168px] tracking-[3.2px]"
              />
              <Button
                text="Data Prototipe"
                link="/sensor"
                style="w-[168px] tracking-[0.5px] text-sm"
              />
            </div>
          </div>
        </div>
        <div>
          <Button
            link="/"
            style="flex items-center justify-center mx-auto mb-10 text-[15px] w-fit h-[5  0px] rounded-md"
            icon ={<FontAwesomeIcon icon={faHouse} size="xl" className=" mb-2 -auto"/>}
          >
          
          </Button>
        </div>
        {/* <div className="text-white font-serif  text-center flex flex-col ites center p-2">
        <p>Departemen Fisika</p>
        <p className="font-bold text-lg">Fakultas Matematika dan Ilmu Pengetahuan Alam</p>
        <p className="text-2xl">Universitas Andalas</p>
      </div> */}
      </div>
    </React.Fragment>
  );
}

export default SideNav;
