import { useState, useEffect } from "react"
import Header from "@/components/Header"
import { register } from "@/actions/userActions"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import "./style.css"
import isEmpty from "@/utils/validation/isEmpty"
import isEmail from "@/utils/validation/isEmail"

const Register = () => {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [registerSuccess, setRegisterSuccess] = useState(false)
  const navigate = useNavigate()

  const submitHandler = (e: any) => {
    e.preventDefault()
    if (isEmpty(userName)) toast.warn("Please check UserName!")
    else if (isEmpty(email) || !isEmail(email)) toast.warn("Please check Email!")
    else if (isEmpty(password)) toast.warn("Please check Password!")
    else if (isEmpty(password2)) toast.warn("Please check Confirm Password!")
    else if (password == password2) register(userName, email, password, setRegisterSuccess)
    else toast.warn("Wrong confirm password!")
  }

  const checkUserName = (value: string) => {
    if (!isEmpty(value)) setUserName(value)
    else toast.error("UserName required!")
  }

  const checkEmail = (value: string) => {
    if (!isEmpty(value)) setEmail(value)
    else toast.error("Email required!")
  }

  const checkPassword = (value: string) => {
    if (!isEmpty(value)) setPassword(value)
    else toast.error("Password required!")
  }

  const checkPassword2 = (value: string) => {
    if (!isEmpty(value)) setPassword2(value)
    else toast.error("Confirm Password required!")
  }

  useEffect(() => {
    if (registerSuccess) {
      toast.success("Register Success!")
      navigate("/login")
    }
  }, [registerSuccess])

  return (
    <div className="register">
      <Header />
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div className="registerContainer">
          <div className="cardHeader">
            <h1>Sign Up</h1>
          </div>
          <div className="formContainer">
            <div className="inputContainer">
              <label htmlFor="username">UserName</label>
              <input
                type="text"
                id="username"
                onChange={(e) => checkUserName(e.target.value)}
                placeholder=" "
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                onChange={(e) => checkEmail(e.target.value)}
                placeholder=" "
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => checkPassword(e.target.value)}
                placeholder=" "
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="repassword">Confirm Password</label>
              <input
                type="password"
                id="repassword"
                onChange={(e) => checkPassword2(e.target.value)}
                placeholder=" "
              />
            </div>
          </div>
          <div className="footer">
            <button type="button" onClick={submitHandler}>
              Sign Up
            </button>
            <p style={{ fontSize: "20px" }}>
              Don't have an account?
              <a href="/login">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
