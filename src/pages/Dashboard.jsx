import React from "react";

import SideNav from "../components/SideNav";
import Livecam from "../components/Livecam";
import Data from "../components/Data";

function Dashboard() {
  return (
    <React.Fragment>
      <div className="flex">
        <SideNav/>
        <Livecam/>
        <Data/>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
