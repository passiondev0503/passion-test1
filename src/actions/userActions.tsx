import axios from "axios"
import { Dispatch, SetStateAction } from "react"
import { toast } from "react-toastify"

const API_URL =
  typeof process !== "undefined"
    ? process.env.FAKE_STORE_API
    : undefined || "https://fakestoreapi.com"

export const login = (
  username: string,
  password: string,
  loginSuccess: { (value: SetStateAction<boolean>): void; (arg0: boolean): any },
  setLoading: Dispatch<SetStateAction<boolean>>
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
    .catch(() => {
      toast.error("Login Failed!")
      setLoading(false)
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
    .then(() => {
      return setRegisterSuccess(true)
    })
