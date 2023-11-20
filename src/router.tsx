import { createBrowserRouter, RouterProvider } from "react-router-dom"

import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { Home } from "."
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
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
