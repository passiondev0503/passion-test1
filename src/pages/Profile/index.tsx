import React, { useEffect, useState } from "react"

import "./style.css"
import Toast from "@/components/Notification"

import { ToastContainer } from "react-toastify"

const Profile = () => {
  const [tab, setTab] = useState("profile")
  const handleTab = (list: string) => {
    setTab(list)
  }
  const [showToast, setShowToast] = useState(false)

  const notify = () => setShowToast(!showToast)
  useEffect(() => {}, [showToast])
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <Toast message="Wow so easy!" showToast={true} />
        <div className="card" style={{ padding: "10px" }}>
          <div className="list" onClick={() => handleTab("profile")}>
            Profile
          </div>
          <div className="list" onClick={() => handleTab("setting")}>
            Setting
          </div>
        </div>
        <div className="card" style={{ width: "100%" }}>
          {tab === "profile" ? (
            <>
              <input type="file" />
              <div className="inputContainer">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder=" " />
              </div>
            </>
          ) : (
            <div style={{ padding: "10px 30px 30px 30px" }}>
              <p>Change Password</p>
              <div className="inputContainer">
                <label htmlFor="old_pass">Old Password</label>
                <input type="password" id="old_pass" placeholder="" />
              </div>
              <div className="inputContainer">
                <label htmlFor="new_pass">New Password</label>
                <input type="password" id="new_pass" placeholder="" />
              </div>
              <div className="inputContainer">
                <label htmlFor="confirm_pass">Confirm Password</label>
                <input type="password" id="confirm_pass" placeholder="" />
              </div>
              <div style={{ display: "flex", justifyContent: "end", gap: "10px" }}>
                <button onClick={notify}>Notify!</button>
                <button>Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Profile
