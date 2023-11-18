import "./style.css"

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <img alt="logo" src="/logo.jpg" />
        <p>TEST</p>
      </div>
      <div className="menu">
        <ul>
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </ul>
      </div>
      <div className="sidebar_footer">
        <img alt="photo" className="photo" src="/photo.jpg" />
        <p className="name">Jacob Kevin</p>
      </div>
    </div>
  )
}

export default SideBar
