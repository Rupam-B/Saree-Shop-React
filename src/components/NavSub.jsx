import React, { useState } from "react";
import "./NavbarStyle.css";
import { NavData } from "./NavData";

const Navbar = () => {
  // const [navHover, setNavHover] = useState(false);
  const [navHover, setNavHover] = useState(Array(NavData.length).fill(false));

  const handleHover = (index) => {
    // setNavHover(true);
    const newNavHover = [...navHover];
    newNavHover[index] = true;
    setNavHover(newNavHover);
  };
  
  const handleMouseLeave = (index) => {
    // setNavHover(false);
    const newNavHover = [...navHover];
    newNavHover[index] = false;
    setNavHover(newNavHover);
  };



  return (
    <>
      <div className="header Navbar-main-div">
        <div className="TopHeader Navbar-background-color-dark">
          <p className="p2 pernia-white-color text-center">
            <i className="fa-solid fa-hands-praying"></i>
            <span className="pernia-black-color">
              <a
                href="https://api.whatsapp.com/send?phone=917000771487&amp;text=Hi!%20Could%20you%20help%20me%20with%20a%20few%20queries!"
                className="pernia-color-red"
              >
                {" "}
                Welcome{" "}
              </a>
            </span>
            <i className="fa-solid fa-hands-praying"></i>
          </p>
        </div>
        <div className="Content layout BreakPointContainer ">
          <div className="Navbar-main-sub-div">
            <div className="sub-div-button-container">
              <button className=" btn Navbar-sub-div-button Navbar-sub-div-button-border-left">
                XXl
              </button>
              <button className=" btn Navbar-sub-div-button"> Xl </button>
              <button className=" btn Navbar-sub-div-button Navbar-sub-div-button-border-right">
                {" "}
                M{" "}
              </button>
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
              {NavData.map((mainData, index) => (
                <div  key={mainData.id}>
                  <li
                   
                    onMouseEnter={()=>handleHover(index)}
                    onMouseLeave={()=>handleMouseLeave(index)}
                  >
                    {mainData.sareeName}
                  </li>

                  <div
                    onMouseEnter={()=>handleHover(index)}
                    onMouseLeave={()=>handleMouseLeave(index)}
                    className={
                      // navHover
                      navHover[index]
                        ? "JamdaniNavData-container JamdaniNavData-container-active"
                        : "JamdaniNavData-container JamdaniNavData-container-Not-active"
                    }
                  >
                    {NavData[index].sareeData.map((items) => (
                      <div
                        key={items.id}
                        className="card JamdaniNavData-container-card"
                      >
                        <div className="JamdaniNavData-container-card-img">
                          <img
                            src={items.src}
                            className="card-img-top"
                            alt="..."
                          />
                        </div>
                        <div className="card-body JamdaniNavData-container-card-body">
                          <div className="JamdaniNavData-container-card-body-p-title">
                            <p className="card-title JamdaniNavData-container-card-body-title-p">{items.subSareeName}</p>
                          </div>
                          <p className="card-text JamdaniNavData-container-card-body-price-p">{items.Cost}</p>
                          <button className="JamdaniNavData-container-card-body-button">
                            Buy
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
 
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
