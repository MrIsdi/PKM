import React from "react";

import SideNav from "../components/SideNav";
import Livecam from "../components/Livecam";


function DashboardCam() {
  return (
    <React.Fragment>
      <div className="flex">
        <SideNav/>
        <Livecam/>
      </div>
    </React.Fragment>
  );
}

export default DashboardCam;
