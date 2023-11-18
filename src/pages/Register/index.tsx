import "./style.css"

const Register = () => {
  return (
    <>
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
          <div className="header">
            <h1>Sign Up</h1>
          </div>
          <div className="formContainer">
            <div className="inputContainer">
              <label htmlFor="username">UserName</label>
              <input type="text" id="username" placeholder=" " />
            </div>
            <div className="inputContainer">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder=" " />
            </div>
            <div className="inputContainer">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder=" " />
            </div>
            <div className="inputContainer">
              <label htmlFor="repassword">Password</label>
              <input type="password" id="repassword" placeholder=" " />
            </div>
          </div>
          <div className="footer">
            <button type="button">Sign Up</button>
            <p style={{ fontSize: "20px" }}>
              Don't have an account?
              <a href="/login">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
