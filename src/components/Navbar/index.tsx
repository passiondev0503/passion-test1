import { useState, useEffect } from "react"
import { logout } from "@/actions/userActions"
import "./style.css"
import { useNavigate } from "react-router-dom"
import IconList from "../Icon"

const Navbar = () => {
  const navigate = useNavigate()
  const [logoutsuccess, logOutSuccess] = useState(false)
  const url = window.location.pathname

  const Logout = (e: any) => {
    e.preventDefault()
    logout(logOutSuccess)
  }

  useEffect(() => {
    if (logoutsuccess) navigate("/login")
  }, [logoutsuccess])

  return (
    <div className="nav_header">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="logo">T</div>
        <p style={{ color: "black", fontSize: "16px" }}>{url}</p>
      </div>
      <button onClick={Logout}>{IconList.logoutIcon}Sign Out</button>
    </div>
  )
}

export default Navbar
