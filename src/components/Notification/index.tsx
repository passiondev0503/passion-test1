import React, { useEffect, useState } from "react"
import "./style.css"

interface ToastProps {
  message: string
  showToast: boolean
}

const Toast = ({ message, showToast }: ToastProps) => {
  const [show, setShow] = useState(showToast)
  console.log("asdfasdfasf")

  //   useEffect(() => {
  //     const timer = setTimeout(() => setShow(false), 3000)
  //     return () => clearTimeout(timer)
  //   }, [showToast])

  if (!show) return null

  return (
    <div className="toast" style={{ visibility: show ? "visible" : "hidden" }}>
      123123123
    </div>
  )
}

export default Toast
