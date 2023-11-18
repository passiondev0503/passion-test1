import Header from "@/components/Header"
import "./style.css"

const Login = () => {
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
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder=" " />
            </div>
            <div className="inputContainer">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder=" " />
            </div>
          </div>
          <div className="footer">
            <button type="button">Sign In</button>
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
