import { Outlet } from "react-router-dom"
import SideBar from "./components/Sidebar/sidebar"
import Navbar from "./components/Navbar"

export function Home() {
  return (
    <div className="bg">
      <SideBar />
      <div className="nav">
        <Navbar />
        <div className="nav_content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
