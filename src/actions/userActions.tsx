import axios, { AxiosResponse } from "axios"
import { SetStateAction } from "react"

export const login = (
  username: string,
  password: string,
  loginSuccess: { (value: SetStateAction<boolean>): void; (arg0: boolean): any }
) =>
  axios
    .post("https://fakestoreapi.com/auth/login", {
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

export const GetAllProducts = (setProducts: {
  (value: SetStateAction<never[]>): void
  (arg0: AxiosResponse<any, any>): any
}) => {
  axios.get(`https://fakestoreapi.com/products`).then((res) => setProducts(res.data))
}

export const GetSingleProduct = (id: number) =>
  axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => res.data)

export const GetAllCategories = (setCategories: {
  (value: SetStateAction<never[]>): void
  (arg0: AxiosResponse<any, any>): any
}) =>
  axios.get(`https://fakestoreapi.com/products/categories`).then((res) => setCategories(res.data))

export const GetInCategory = (name: string) =>
  axios.get(`https://fakestoreapi.com/products/category/${name}`).then((res) => res.data)
