import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Router from "./router"

export function App() {
  return (
    <div>
      <Router />
      <ToastContainer />
    </div>
  )
}
