import React, { useState } from 'react'
import './SidebarStyle.css'

export const Sidebar = () => {

  const [toggleSidebar,setToggleSidebar] = useState(false)

  const toggleSidebarfunc = ()=>{
    setToggleSidebar(!toggleSidebar)
  }
  return (
    <>
    <div className="side-bar-container-mobile">
              <button onClick={toggleSidebarfunc} className={toggleSidebar? "side-bar-mobile side-bar-mobile-active-background" :"side-bar-mobile" }><i className="fa-solid fa-bars"></i></button>
            </div>

    <div className={toggleSidebar? "sidebar-main-div sidebar-main-div-show" :"sidebar-main-div hide-to-right" }>
      <div className="sidebar-items">
        <ul>
          <li><i className="fa-solid fa-house"></i> Home</li>
          <li><i className="fa-solid fa-address-card"></i> About</li>
          <li><i className="fa-solid fa-phone"></i> Contact</li>
          <li><i className="fa-brands fa-first-order-alt"></i> Orders</li>
        </ul>
        </div>
        </div>
        
        </>
  )
}
