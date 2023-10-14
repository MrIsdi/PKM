import React from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <React.Fragment>
      <div className="w-[259px] h-[700px] bg-[#2d2d2d73] backdrop-blur-[100px] flex flex-col justify-between">
        <div className=" flex flex-col items-center justify-start ">
          <div className="pt-4 ">
            {/* Head Side Nav  */}
            <div className="text-center text-white pt-5 mb-5">
              <img src={logo} alt="" className="mx-auto" />
              <p className="font-bold">PKM KC CV-Tomato</p>
              <p>Official Website</p>
            </div>
            {/* Button SideNav */}
            <div className="flex flex-col items-start">
              <Button text="Live Cam" link="/dashboard/livecam"/>
              <Button text="Data Prototipe" link="/dashboard/data-tumbuhan"/>
            </div>
          </div>
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
