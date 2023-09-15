import React, { useState } from "react";
import "./NavbarStyle.css";
import { NavData } from "./NavData";

const NavDatas = NavData;

const Navbar = () => {
  const [jamdani, setJamdani] = useState(false);
  const [katan, setKatan] = useState(false);
  const [banarasi, setBanarasi] = useState(false);
  const [silk, setSilk] = useState(false);
  const [cotton, setCotton] = useState(false);
  const [printed, setPrinted] = useState(false);
  const [baluchori, setBaluchori] = useState(false);
  const [tassar, setTassar] = useState(false);

  const JamdanihandleHover = () => {
    setJamdani(true);
  };
  const JamdanihandleMouseLeave = () => {
    setJamdani(false);
  };

  const KatanhandleHover = () => {
    setKatan(true);
  };
  const KatanhandleMouseLeave = () => {
    setKatan(false);
  };

  const BanarasihandleHover = () => {
    setBanarasi(true);
  };
  const BanarasihandleMouseLeave = () => {
    setBanarasi(false);
  };

  const SilkhandleHover = () => {
    setSilk(true);
  };
  const SilkhandleMouseLeave = () => {
    setSilk(false);
  };
  const cottonhandleHover = () => {
    setCotton(true);
  };
  const cottonhandleMouseLeave = () => {
    setCotton(false);
  };

  const printedhandleHover = () => {
    setPrinted(true);
  };
  const printedhandleMouseLeave = () => {
    setPrinted(false);
  };

  const baluchorihandleHover = () => {
    setBaluchori(true);
  };
  const baluchorihandleMouseLeave = () => {
    setBaluchori(false);
  };

  const TassarhandleHover = () => {
    setTassar(true);
  };
  const TassarhandleMouseLeave = () => {
    setTassar(false);
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
              <li
              onMouseEnter={JamdanihandleHover} 
              onMouseLeave={JamdanihandleMouseLeave}
              >Jamdani</li>
              <div onMouseEnter={JamdanihandleHover} onMouseLeave={JamdanihandleMouseLeave}
               className={jamdani?"JamdaniNavData-container JamdaniNavData-container-active":"JamdaniNavData-container JamdaniNavData-container-Not-active"}>
                {NavDatas.map((items) => (
                  <div
                    key={items.id}
                    className="card JamdaniNavData-container-card"
                  >
                    <div className="JamdaniNavData-container-card-img">
                      <img src={items.src} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body JamdaniNavData-container-card-body">
                      <div className="JamdaniNavData-container-card-body-h5">
                      <h5 className="card-title">{items.FoodName}</h5>
                      </div>
                      <p className="card-text">{items.rating}</p>
                      <button className="JamdaniNavData-container-card-body-button">Buy</button>
                    </div>
                  </div>
                ))}
              </div>
              <li onMouseEnter={KatanhandleHover} 
              onMouseLeave={KatanhandleMouseLeave}>Katan</li>
              <div onMouseEnter={KatanhandleHover} onMouseLeave={KatanhandleMouseLeave}
               className={katan?"JamdaniNavData-container JamdaniNavData-container-active":"JamdaniNavData-container JamdaniNavData-container-Not-active"}>
                {NavDatas.map((items) => (
                  <div
                    key={items.id}
                    className="card JamdaniNavData-container-card"
                  >
                    <div className="JamdaniNavData-container-card-img">
                      <img src={items.src} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body JamdaniNavData-container-card-body">
                      <h5 className="card-title">{items.FoodName}</h5>
                      <p className="card-text">{items.rating}</p>
                      <button className="JamdaniNavData-container-card-body-button">Go somewhere</button>
                    </div>
                  </div>
                ))}
              </div>
              <li onMouseEnter={BanarasihandleHover} 
              onMouseLeave={BanarasihandleMouseLeave}>Banarasi</li>
              <div onMouseEnter={BanarasihandleHover} onMouseLeave={BanarasihandleMouseLeave}
               className={banarasi?"JamdaniNavData-container JamdaniNavData-container-active":"JamdaniNavData-container JamdaniNavData-container-Not-active"}>
                {NavDatas.map((items) => (
                  <div
                    key={items.id}
                    className="card JamdaniNavData-container-card"
                  >
                    <div className="JamdaniNavData-container-card-img">
                      <img src={items.src} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body JamdaniNavData-container-card-body">
                      <h5 className="card-title">{items.FoodName}</h5>
                      <p className="card-text">{items.rating}</p>
                      <button className="JamdaniNavData-container-card-body-button">Go somewhere</button>
                    </div>
                  </div>
                ))}
              </div>
              <li onMouseEnter={SilkhandleHover} 
              onMouseLeave={SilkhandleMouseLeave}>Silk</li>
              <div onMouseEnter={SilkhandleHover} onMouseLeave={SilkhandleMouseLeave}
               className={silk?"JamdaniNavData-container JamdaniNavData-container-active":"JamdaniNavData-container JamdaniNavData-container-Not-active"}>
                {NavDatas.map((items) => (
                  <div
                    key={items.id}
                    className="card JamdaniNavData-container-card"
                  >
                    <div className="JamdaniNavData-container-card-img">
                      <img src={items.src} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body JamdaniNavData-container-card-body">
                      <h5 className="card-title">{items.FoodName}</h5>
                      <p className="card-text">{items.rating}</p>
                      <button className="JamdaniNavData-container-card-body-button">Go somewhere</button>
                    </div>
                  </div>
                ))}
              </div>
              <li onMouseEnter={cottonhandleHover} 
              onMouseLeave={cottonhandleMouseLeave}>Cotton</li>
              <div onMouseEnter={cottonhandleHover} onMouseLeave={cottonhandleMouseLeave}
               className={cotton?"JamdaniNavData-container JamdaniNavData-container-active":"JamdaniNavData-container JamdaniNavData-container-Not-active"}>
                {NavDatas.map((items) => (
                  <div
                    key={items.id}
                    className="card JamdaniNavData-container-card"
                  >
                    <div className="JamdaniNavData-container-card-img">
                      <img src={items.src} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body JamdaniNavData-container-card-body">
                      <h5 className="card-title">{items.FoodName}</h5>
                      <p className="card-text">{items.rating}</p>
                      <button className="JamdaniNavData-container-card-body-button">Go somewhere</button>
                    </div>
                  </div>
                ))}
              </div>
              <li onMouseEnter={printedhandleHover} 
              onMouseLeave={printedhandleMouseLeave}>Printed</li>
              <div onMouseEnter={printedhandleHover} onMouseLeave={printedhandleMouseLeave}
               className={printed?"JamdaniNavData-container JamdaniNavData-container-active":"JamdaniNavData-container JamdaniNavData-container-Not-active"}>
                {NavDatas.map((items) => (
                  <div
                    key={items.id}
                    className="card JamdaniNavData-container-card"
                  >
                    <div className="JamdaniNavData-container-card-img">
                      <img src={items.src} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body JamdaniNavData-container-card-body">
                      <h5 className="card-title">{items.FoodName}</h5>
                      <p className="card-text">{items.rating}</p>
                      <button className="JamdaniNavData-container-card-body-button">Go somewhere</button>
                    </div>
                  </div>
                ))}
              </div>
              <li onMouseEnter={baluchorihandleHover} 
              onMouseLeave={baluchorihandleMouseLeave}>Baluchori</li>
              <div onMouseEnter={baluchorihandleHover} onMouseLeave={baluchorihandleMouseLeave}
               className={baluchori?"JamdaniNavData-container JamdaniNavData-container-active":"JamdaniNavData-container JamdaniNavData-container-Not-active"}>
                {NavDatas.map((items) => (
                  <div
                    key={items.id}
                    className="card JamdaniNavData-container-card"
                  >
                    <div className="JamdaniNavData-container-card-img">
                      <img src={items.src} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body JamdaniNavData-container-card-body">
                      <h5 className="card-title">{items.FoodName}</h5>
                      <p className="card-text">{items.rating}</p>
                      <button className="JamdaniNavData-container-card-body-button">Go somewhere</button>
                    </div>
                  </div>
                ))}
              </div>
              <li onMouseEnter={TassarhandleHover} 
              onMouseLeave={TassarhandleMouseLeave}>Tassar</li>
              <div onMouseEnter={TassarhandleHover} onMouseLeave={TassarhandleMouseLeave}
               className={tassar?"JamdaniNavData-container JamdaniNavData-container-active":"JamdaniNavData-container JamdaniNavData-container-Not-active"}>
                {NavDatas.map((items) => (
                  <div
                    key={items.id}
                    className="card JamdaniNavData-container-card"
                  >
                    <div className="JamdaniNavData-container-card-img">
                      <img src={items.src} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body JamdaniNavData-container-card-body">
                      <h5 className="card-title">{items.FoodName}</h5>
                      <p className="card-text">{items.rating}</p>
                      <button className="JamdaniNavData-container-card-body-button">Go somewhere</button>
                    </div>
                  </div>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
