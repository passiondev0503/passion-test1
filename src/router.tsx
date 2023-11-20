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
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/profile",
        element: isAuthenticated ? <Profile /> : <Navigate to="/login" />,
      },
      {
        path: "/product",
        element: isAuthenticated ? <Product /> : <Navigate to="/login" />,
      },
      {
        path: "/product/:id",
        element: isAuthenticated ? <ProductDetail /> : <Navigate to="/login" />,
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
