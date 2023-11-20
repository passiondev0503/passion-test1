import { BrowserRouter, Route, Routes } from "react-router-dom"

import Welcome from "@/pages/Welcome"
import NotFound from "@/pages/NotFound"

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
