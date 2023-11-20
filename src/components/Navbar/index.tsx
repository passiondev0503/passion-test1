import { useState, useEffect } from "react"
import { logout } from "@/actions/userActions"
import "./style.css"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  const [logoutsuccess, logOutSuccess] = useState(false)

  const Logout = (e: any) => {
    e.preventDefault()
    logout(logOutSuccess)
  }

  useEffect(() => {
    if (logoutsuccess) navigate("/login")
  }, [logoutsuccess])

  return (
    <div className="nav_header">
      <p>URL</p>
      <button onClick={Logout}>Sign Out</button>
    </div>
  )
}

export default Navbar
