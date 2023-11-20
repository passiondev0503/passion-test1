import { createBrowserRouter, RouterProvider } from "react-router-dom"

import NotFound from "./pages/NotFound"
import Welcome from "./pages/Welcome"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { Home } from "."
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Product from "./pages/Product"
import ProductDetail from "./pages/Product/ProductDetail"

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
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
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
