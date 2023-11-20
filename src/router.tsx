import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { Home } from "."
import Profile from "./pages/Profile"
import Product from "./pages/Product"
import ProductDetail from "./pages/Product/ProductDetail"

const isAuthenticated = localStorage.getItem("userInfo")

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
  {
    path: "",
    element: <Login />,
  },
  {
    path: "/",
    element: isAuthenticated ? <Home /> : <Navigate to="/login" />,
    children: [
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
