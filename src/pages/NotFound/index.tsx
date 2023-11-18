import "./style.css"

const NotFound = () => {
  return (
    <div className="layout">
      <h1 className="title">Oops!</h1>
      <div className="text">We can't find that page.</div>

      <div className="illustration">
        <img src="./404-error.png" alt="404-Error" />
      </div>

      <div className="link">
        <a href="/" className="btn">
          Return Home
        </a>
      </div>
    </div>
  )
}

export default NotFound
