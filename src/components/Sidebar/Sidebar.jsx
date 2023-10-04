import React, { useState } from 'react'
import './SidebarStyle.css'
import { Link } from 'react-router-dom'

export const Sidebar = () => {

  const [toggleSidebar,setToggleSidebar] = useState(false)

  const toggleSidebarfuncOn = ()=>{
    setToggleSidebar(true)
  }
  const toggleSidebarfuncOff = ()=>{
    setToggleSidebar(false)
  }
  return (
    <>
    <div className="side-bar-container-mobile">
              <button onMouseEnter={toggleSidebarfuncOn} onMouseLeave={toggleSidebarfuncOff} className={toggleSidebar? "side-bar-mobile side-bar-mobile-active-background" :"side-bar-mobile" }><i className="fa-solid fa-bars"></i></button>
            </div>

    <div className={toggleSidebar? "sidebar-main-div sidebar-main-div-show" :"sidebar-main-div hide-to-right" }>
      <div className="sidebar-items">
        <ul>
          <li><i className="fa-solid fa-house"></i><Link to={'/'}>Home</Link></li>
          <li><i className="fa-solid fa-address-card"></i><Link to={'/about'}>About</Link></li>
          <li><i className="fa-solid fa-phone"></i><Link to={'/contact'}>Contact</Link></li>
          <li><i className="fa-brands fa-first-order-alt"></i><Link to={'/orders'}>Orders</Link></li>
        </ul>
        </div>
        </div>
        
        </>
  )
}
export default Sidebar
