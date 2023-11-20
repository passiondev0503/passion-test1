import React, { useState } from "react"
import "./style.css"

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(-1)
  const [subMenu, setSubMenu] = useState(false)

  function handleClick(index: any) {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  const handleMenu = () => {
    console.log("123123")
    setSubMenu(!subMenu)
  }

  return (
    <>
      {/* <div className="sidebar">
        <div className="sidebar_header">
          <img alt="logo" src="/logo.jpg" />
          <p>TEST</p>
        </div>


        <div className="sidebar_footer">
          <img alt="photo" className="photo" src="/photo.jpg" />
          <p className="name">Jacob Kevin</p>
        </div>
      </div> */}
      {/* <div id="side-bar">
        <input id="side-toggle" type="checkbox" />
        <div id="side-header">
          <a id="side-title" href="https://codepen.io" target="_blank">
            C<i className="fab fa-codepen"></i>DEPEN
          </a>
          <label className="label"htmlFor="side-toggle">
            <span id="side-toggle-burger"></span>
          </label>
          <hr />
        </div>
        <div id="side-content">
          <div className="side-button">
            <i className="fas fa-palette"></i>
            <span>Dashboard</span>
          </div>
          <hr />
          <div className="side-button">
            <i className="fas fa-heart"></i>
            <span>Product</span>
          </div>
          <hr />
          <div className="side-button">
            <i className="fas fa-gem"></i>
            <span>Profile</span>
          </div>
          <div id="side-content-highlight"></div>
        </div>
        <input id="side-footer-toggle" type="checkbox" />
        <div id="side-footer">
          <div id="side-footer-heading">
            <div id="side-footer-avatar">
              <img src="/photo.jpg" />
            </div>
            <div id="side-footer-titlebox">
              <a
                id="side-footer-title"
                href="https://codepen.io/uahnbu/pens/public"
                target="_blank"
              >
                uahnbu
              </a>
              <span id="side-footer-subtitle">Admin</span>
            </div>
            <label className="label"htmlFor="side-footer-toggle">
              <i className="fas fa-caret-up"></i>
            </label>
          </div>
        </div>
      </div> */}
      <div className="layout has-sidebar fixed-sidebar fixed-header">
        <aside id="sidebar" className="sidebar break-point-sm has-bg-image">
          <a id="btn-collapse" className="sidebar-collapser">
            <i className="ri-arrow-left-s-line"></i>
          </a>
          <div className="sidebar-layout">
            <div className="sidebar-header">
              <div className="pro-sidebar-logo">
                <div>P</div>
                <h5>Pro Sidebar</h5>
              </div>
            </div>
            <div className="sidebar-content">
              <nav className="menu open-current-submenu">
                <ul>
                  <li className="menu-header">
                    <span> GENERAL </span>
                  </li>
                  <li className="menu-item sub-menu">
                    <a onClick={handleMenu}>
                      <span className="menu-title">Components</span>
                    </a>
                    {subMenu ? (
                      <div className="sub-menu-list">
                        <ul>
                          <li className="menu-item">
                            <a href="#">
                              <span className="menu-title">Grid</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="#">
                              <span className="menu-title">Layout</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <></>
                    )}
                  </li>
                  <li className="menu-item">
                    <a href="/profile">
                      <span className="menu-title">Profile</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}

export default SideBar
