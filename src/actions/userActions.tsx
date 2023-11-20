import axios from "axios"
import { SetStateAction } from "react"

const API_URL =
  typeof process !== "undefined"
    ? process.env.FAKE_STORE_API
    : undefined || "https://fakestoreapi.com"

export const login = (
  username: string,
  password: string,
  loginSuccess: { (value: SetStateAction<boolean>): void; (arg0: boolean): any }
) =>
  axios
    .post(`${API_URL}/auth/login`, {
      username: username,
      password: password,
    })
    .then((res) => {
      const token = res.data.token
      localStorage.setItem("userInfo", JSON.stringify(token))
      return loginSuccess(true)
    })

export const logout = (logOutSuccess: {
  (value: SetStateAction<boolean>): void
  (arg0: boolean): any
}) => {
  localStorage.removeItem("userInfo")
  return logOutSuccess(true)
}

export const register = (
  userName: string,
  Email: string,
  password: string,
  setRegisterSuccess: { (value: SetStateAction<boolean>): void; (arg0: boolean): any }
) =>
  axios
    .post(`${API_URL}/users`, {
      username: userName,
      password: password,
      email: Email,
    })
    .then((res) => {
      return setRegisterSuccess(true)
    })

export const GetAllProducts = async () => {
  const response = await axios.get(`${API_URL}/products`)
  return response.data
}

export const GetSingleProduct = (id: number) =>
  axios.get(`${API_URL}/products/${id}`).then((res) => res.data)

export const GetAllCategories = () =>
  axios.get(`${API_URL}/products/categories`).then((res) => res.data)

export const GetInCategory = (name: string) =>
  axios.get(`${API_URL}/products/category/${name}`).then((res) => res.data)
