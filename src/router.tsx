import { createBrowserRouter, RouterProvider } from "react-router-dom"

import NotFound from "./pages/NotFound"
import Welcome from "./pages/Welcome"
import Login from "./pages/Login"
import Register from "./pages/Register"

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
