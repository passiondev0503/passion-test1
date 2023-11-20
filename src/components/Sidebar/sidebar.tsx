import React, { useState } from "react"
import "./style.css"
import IconList from "../Icon"

const SideBar = (prop: any) => {
  const url = window.location.pathname

  return (
    <>
      <div className="layout has-sidebar fixed-sidebar fixed-header">
        <aside
          id="sidebar"
          className="sidebar break-point-sm has-bg-image"
          style={prop.collapse ? { width: "fit-content" } : {}}
        >
          <a id="btn-collapse" className="sidebar-collapser">
            <i className="ri-arrow-left-s-line"></i>
          </a>
          <div className="sidebar-layout">
            <div className="sidebar-header">
              <div className="pro-sidebar-logo">
                <div>T</div>
                {prop.collapse ? <></> : <h5>Test</h5>}
              </div>
            </div>
            <div className="sidebar-content">
              <nav className="menu open-current-submenu">
                <ul>
                  <li
                    className="menu-item"
                    style={url.includes("profile") ? { borderLeft: "4px solid #d4b65e" } : {}}
                  >
                    <a href="/profile">
                      <span className="menu-title">
                        {IconList.humanIcon}
                        {prop.collapse ? "" : "Profile"}
                      </span>
                    </a>
                  </li>
                  <li
                    className="menu-item"
                    style={url.includes("product") ? { borderLeft: "4px solid #d4b65e" } : {}}
                  >
                    <a href="/product">
                      <span className="menu-title">
                        {IconList.humanIcon}
                        {prop.collapse ? "" : "Product"}
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="sidebar-footer" onClick={() => prop.setCollapse(!prop.collapse)}>
              {prop.collapse ? IconList.arrowRightIcon : IconList.arrowLeftIcon}
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}

export default SideBar
