import React from "react";
import "./NavbarStyle.css"

const Navbar = () => {
  return (
    <>
      <div className="header Navbar-main-div">
        <div className="TopHeader Navbar-background-color-dark">
          <p className="p2 pernia-white-color text-center">
            For customizations or personal assistance, WhatsApp us at 
            <span className="pernia-black-color">
              <a href="https://api.whatsapp.com/send?phone=917000771487&amp;text=Hi!%20Could%20you%20help%20me%20with%20a%20few%20queries!"
                className="pernia-color-red">+91 7000771487</a>
            </span>
          </p>
        </div>
        <div className="Content layout BreakPointContainer ">
          <div className="Navbar-main-sub-div">
            <div className="sub-div-button-container">
              <button className=" btn Navbar-sub-div-button Navbar-sub-div-button-border-left">XXl</button>
              <button className=" btn Navbar-sub-div-button"> Xl </button>
              <button className=" btn Navbar-sub-div-button Navbar-sub-div-button-border-right"> M </button>
            </div>
            <div className="side-bar-container-mobile">
              <button className="side-bar-mobile"><i className="fa-solid fa-bars"></i></button>
            </div>
            <h1>SUBHRA SAREE HOUSE</h1>
            <div className="Navbar-sub-div-icons">
            <i className="fa-regular fa-heart mobile-display-none"></i>
            <i className="fa-solid fa-magnifying-glass mobile-display-none"></i>
            <i className="fa-solid fa-bag-shopping"></i>
            <i className="fa-regular fa-user"></i>
            </div>

          </div>
          <div className="nav-items">
            <ul>
              <li>Jamdani</li>
              <li>Katan</li>
              <li>Banarasi</li>
              <li>Silk</li>
              <li>Cotton</li>
              <li>Printed</li>
              <li>Baluchori</li>
              <li>Jamdani</li>
            </ul>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
