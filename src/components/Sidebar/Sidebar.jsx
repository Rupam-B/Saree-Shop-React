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
          <li className='Sidebar-Home'><i className="fa-solid fa-house"></i><Link to={'/'}>Home</Link></li>
          <li className='Sidebar-About'><i className="fa-solid fa-address-card"></i><Link to={'/about'}>About</Link></li>
          <li className='Sidebar-contact'><i className="fa-solid fa-phone"></i><Link to={'/contact'}>Contact</Link></li>
          <li className='Sidebar-Orders'><i className="fa-solid fa-gift"></i><Link to={'/orders'}>Orders</Link></li>
          <li className='favourite-pc-display-none'><i className="fa-solid fa-heart "></i><Link to={'/favourites'}>Favourites</Link></li>
          <li className='Search-pc-display-none'><i className="fa-solid fa-magnifying-glass"></i><Link to={'/Search'}>Search</Link></li>
        </ul>
        </div>
        </div>
        
        </>
  )
}
export default Sidebar
