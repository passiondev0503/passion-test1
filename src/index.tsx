import { useState, useEffect } from "react"

import { Outlet } from "react-router-dom"
import SideBar from "./components/Sidebar/sidebar"
import Navbar from "./components/Navbar"

export function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [response, setResponse] = useState(false)
  const [collapse, setCollapse] = useState(false)
  const [state, setState] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  useEffect(() => {
    if (windowWidth < 470) setResponse(true)
    else if (windowWidth > 470 && windowWidth < 955) {
      setCollapse(true)
      setState(true)
    } else if (windowWidth > 1210) {
      setCollapse(false)
      setState(true)
    } else setResponse(false)
  }, [windowWidth])
  return (
    <div className="bg">
      {response ? <></> : <SideBar setCollapse={setCollapse} collapse={collapse} />}
      <div className="nav">
        <Navbar />
        <div className="nav_content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
