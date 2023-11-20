import { useState, useEffect } from "react"
import { login } from "@/actions/userActions"
import Header from "@/components/Header"
import "./style.css"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Login = () => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [loginsucess, loginSuccess] = useState(false)
  const navigate = useNavigate()

  const submitHandler = (e: any) => {
    e.preventDefault()
    login(username, password, loginSuccess)
  }

  useEffect(() => {
    if (loginsucess) {
      toast.success("Login Success!")
      navigate("/product")
    }
  }, [loginsucess])

  return (
    <div className="login">
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
        <div className="loginContainer">
          <div className="header">
            <h1>Sign In</h1>
          </div>
          <div className="formContainer">
            <div className="inputContainer">
              <label htmlFor="email">UserName (mor_2314)</label>
              <input
                type="text"
                id="email"
                onChange={(e) => setUserName(e.target.value)}
                placeholder=" "
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="password">Password (83r5^_)</label>
              <input
                type="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                placeholder=" "
              />
            </div>
          </div>
          <div className="footer">
            <button type="button" onClick={submitHandler}>
              Sign In
            </button>
            <p style={{ fontSize: "20px" }}>
              Don't have an account?
              <a href="/signup">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
