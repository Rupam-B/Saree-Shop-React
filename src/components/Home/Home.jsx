import React, { useCallback, useEffect, useState } from "react";
import "./HomeStyle.css";
import { FlashSaleExclusiveData } from "./FlashSaleExclusivedata";

const FlashSale = FlashSaleExclusiveData;

const Home = () => {
  const [imgChange, setimgChange] = useState(false);
  const [mainimgChange, setMainimgChange] = useState(false);
  const [particularimgChange, setParticularimgChange] = useState("");
  const [particularimgid, setParticularimgid] = useState("");

  const handleMainImageChange = () => {
    setMainimgChange(!mainimgChange);
  };
  
  const handleImageChange =useCallback((id, imgsrc2) => {
    setimgChange(!imgChange);
    setParticularimgChange(imgsrc2);
    setParticularimgid(id);
  }, [imgChange]);
  useEffect(() => {
    
    handleImageChange(particularimgid, particularimgChange);
    // eslint-disable-next-line
  }, [particularimgid, particularimgChange]);

  return (
    <>
      <div className="Home-main-div">
        <div className="main-background">
          <img
            onMouseEnter={handleMainImageChange}
            onMouseLeave={handleMainImageChange}
            src={
              mainimgChange
                ? "https://www.bharatsthali.com/cdn/shop/products/6_90bb00f0-9eb2-4b10-8c76-09ab28cadb2e_1800x.jpg?v=1641890691"
                : "https://img.perniaspopupshop.com/Landing-FS130923.jpg"
            }
            alt=""
          />
        </div>
        <hr />
        <div className="flash-sale-heading">Flash Sale Exclusive!</div>
        <div className="flash-sale-container">
          {/* <div className="row mb-2 black-bgrnd p-4" style={{ width: '100%', overflow: 'hidden' }}> */}
          {FlashSale.map((items) => (
            <div key={items.id} className="card flash-sale-container-card">
              <div className="flash-sale-container-card-img">
                <img
                  onMouseEnter={() => handleImageChange(items.id, items.src2)}
                  onMouseLeave={() => handleImageChange(items.id)}
                  src={
                    imgChange && particularimgid === items.id && particularimgChange !== undefined
                      ? particularimgChange
                      : items.src
                  }
                  // src={imgChange && allimgid && allimgid === items.id? allimgChange: items.src}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body flash-sale-container-card-body">
                <h5 className="card-title">{items.hotelName}</h5>
                <p className="card-text">{items.rating}</p>
                <button className="flash-sale-container-card-body-button">Buy</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Home;
