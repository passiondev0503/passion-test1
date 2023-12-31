import React from "react"
import ReactDOM from "react-dom/client"

// import { WrappedApp } from "@/App"
import { App } from "@/App"
import "@/styles/globals.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
