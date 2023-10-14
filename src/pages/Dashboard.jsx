import React from "react"
import SideNav from "../components/SideNav"
import Livecam from '../components/Livecam'

function Dashboard() {
  return (
    <React.Fragment>
      <div className="flex">
        <SideNav />
        <Livecam />
      </div>
    </React.Fragment>
  )
}

export default Dashboard
