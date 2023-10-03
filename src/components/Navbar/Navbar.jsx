import React, { useEffect, useState } from "react";
import "./NavbarStyle.css";
import { NavData } from "./NavData";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../Redux/action";
import { AddFavItems } from "../../Redux/action";

const Navbar = () => {
  // States-----

  const cartObjectValue = useSelector((state) => state.AddOrRemoveItems);
  const AuthObject = useSelector((state) => state.AuthenticationReducer);

  const cartValue = cartObjectValue.cart.length;

  const Navdispatch = useDispatch();

  const [newid, setNewid] = useState("");
  const [imgid, setImgid] = useState("");
  const [toggleNavFavourite, setToggleNavFavourite] = useState(false)
  const [navFavouriteId, setNavFavouriteId] = useState('')

  // Functions-----
  const handleHover = (id) => {
    setNewid(id);
  };
  const handleMouseLeave = () => {
    setNewid("");
  };
  const handleNavImagesin = (imgid) => {
    setImgid(imgid);
  };
  const handleNavImagesOut = () => {
    setImgid("");
  };
  const handleNavFavToggle =(navFavid)=>{
    setNavFavouriteId(navFavid)
    setToggleNavFavourite(!toggleNavFavourite)

  }
  useEffect(() => {
    handleHover(newid);
    handleNavImagesin(imgid);
  }, [newid, imgid]);

  return (
    <>
      <div className="header Navbar-main-div">
        <div className="TopHeader Navbar-background-color-dark">
          <p className="p2 pernia-white-color text-center">
            <i className="fa-solid fa-hands-praying"></i>
            <span className="pernia-black-color">
              <span
                style={{ marginLeft: "0.5vw" }}
                className="pernia-color-red"
              >
                {" "}
                Welcome{" "}
              </span>
            </span>
            <span style={{ color: "white", marginRight: "0.5vw" }}>
              {AuthObject.checkArr.newname ? AuthObject.checkArr.newname : ""}
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
              <Link to={"/favourites"}>
                <i className="fa-regular fa-heart  mobile-display-favourites"></i>
              </Link>
              <Link to={"/Authen"}>
                <i className="fa-regular fa-user mobile-display-right-user"></i>
              </Link>
              <div
                className={
                  AuthObject.checkArr.newname
                    ? "user-signed-symbol-green"
                    : "user-signed-symbol-white"
                }
              >
                ✓
              </div>
              <i className="fa-solid fa-magnifying-glass mobile-display-none"></i>
              <Link
                to={"/cart"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <i className="fa-solid fa-bag-shopping mobile-display-left-cart"></i>
              </Link>
              <div className="cart-value">{cartValue}</div>
            </div>
          </div>
          <div className="nav-items">
            <ul>
              {NavData.map((mainData, index) => (
                <div key={mainData.id}>
                  <li
                    onMouseEnter={() => handleHover(mainData.id)}
                    onMouseLeave={() => handleMouseLeave(mainData.id)}
                  >
                    {mainData.sareeName}
                  </li>

                  <div
                    onMouseEnter={() => handleHover(mainData.id)}
                    onMouseLeave={() => handleMouseLeave(mainData.id)}
                    className={
                      newid === mainData.id
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
                            onMouseEnter={() => handleNavImagesin(items.id)}
                            onMouseLeave={handleNavImagesOut}
                            src={imgid === items.id ? items.src2 : items.src}
                            className="card-img-top"
                            alt="..."
                          />
                        </div>
                        <div className="card-body JamdaniNavData-container-card-body">
                          <div className="JamdaniNavData-container-card-body-p-title">
                            <p className="card-title JamdaniNavData-container-card-body-title-p">
                              {items.subSareeName}
                            </p>
                          </div>
                          <p className="card-text JamdaniNavData-container-card-body-price-p">
                            INR {items.Cost}.00
                          </p>
                          <button
                            onClick={() => {
                              Navdispatch(
                                AddToCart(
                                  items.id,
                                  items.src,
                                  items.Cost,
                                  items.subSareeName
                                )
                              );
                            }}
                            className="JamdaniNavData-container-card-body-button"
                          >
                            Buy
                          </button>
                          <button
                            onClick={() => {
                              if (toggleNavFavourite) {
                                handleNavFavToggle(items.id);
                              } else {
                                Navdispatch(AddFavItems(
                                  items.id,
                                  items.src,
                                  items.Cost,
                                  items.subSareeName));
                                handleNavFavToggle(items.id);
                              }
                            }}
                            className={
                              toggleNavFavourite && navFavouriteId === items.id
                                ? "Extended-Nav-container-card-heart-active"
                                : "Extended-Nav-container-card-heart-inactive"
                            }
                          >
                            <i className="fa-solid fa-heart"></i>
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
