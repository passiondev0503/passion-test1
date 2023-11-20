export default function showToast(message: string, type: string) {
  const toast = document.createElement("div")
  toast.classList.add("toast", type)
  toast.innerText = message
  document.getElementById("toastContainer")?.appendChild(toast)
  setTimeout(() => {
    toast.style.display = "none"
  }, 3000)
}

export function showSuccessToast() {
  showToast("Success! Your action was completed.", "success")
}

export function showErrorToast() {
  showToast("Error! Something went wrong.", "error")
}

export function showCustomToast() {
  showToast("Custom message.", "custom")
}

// window.addEventListener("DOMContentLoaded", (e) => {
//   let headLinks = document.querySelector("head")
//   let containerNotifications = document.createElement("div")
//   containerNotifications.id = "toasts"

//   let link = document.createElement("link")
//   link.href = "./toast.css"
//   link.setAttribute("rel", "stylesheet")

//   document.body.appendChild(containerNotifications)
//   headLinks?.appendChild(link)
// })

// let configIcons: any = {
//   valid: "fa-circle-check",
//   error: "fa-circle-xmark",
//   warring: "fa-circle-exclamation",
// }

// const toastNotif = (setting: any) => {
//   let notifs = document.getElementById("toasts")
//   let toast = document.createElement("div")
//   toast.style.backgroundColor = setting.color
//   toast.classList.add("toast", "toast-show")
//   const icon = document.createElement("i")
//   icon.classList.add("fa-solid", configIcons[setting.icon])

//   let text = document.createElement("p")
//   text.appendChild(document.createTextNode(setting.text))

//   toast.appendChild(icon)
//   toast.appendChild(text)
//   notifs?.appendChild(toast)

//   setTimeout(() => {
//     toast.classList.remove("toast-show")
//     toast.classList.add("toast-hide")
//     setTimeout(() => {
//       toast.remove()
//     }, 300)
//   }, setting.timeout)
// }

// export default toastNotif

// import React, { useEffect, useState } from "react"
// import "./style.css"

// interface ToastProps {
//   message: string
//   showToast: boolean
// }

// const Toast = () => {
//   const [show, setShow] = useState(showToast)
//   console.log("asdfasdfasf")

//     useEffect(() => {
//       const timer = setTimeout(() => setShow(false), 3000)
//       return () => clearTimeout(timer)
//     }, [showToast])

//   if (!show) return null

//   return (
//     <div className="toast" style={{ visibility: show ? "visible" : "hidden" }}>
//       123123123
//     </div>
//   )
// }

// export default Toast
