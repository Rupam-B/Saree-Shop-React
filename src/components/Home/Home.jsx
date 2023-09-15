import React from "react";
import "./HomeStyle.css";
import { FlashSaleExclusiveData } from "./FlashSaleExclusivedata";

const FlashSale = FlashSaleExclusiveData;

const Home = () => {
  return (
    <>
      <div className="Home-main-div">
        <div className="main-background">
          <img
            src="https://img.perniaspopupshop.com/Landing-FS130923.jpg"
            alt="Loding error"
          />
        </div>
        <hr />
        <div className="flash-sale-heading">Flash Sale Exclusive!</div>
        <div className="flash-sale-container">
          {/* <div className="row mb-2 black-bgrnd p-4" style={{ width: '100%', overflow: 'hidden' }}> */}
          {FlashSale.map((items) => (
            <div key={items.id} className="card flash-sale-container-card">
              <div className="flash-sale-container-card-img">
              <img src={items.src} className="card-img-top" alt="..." />
              </div>
              <div className="card-body flash-sale-container-card-body">
                <h5 className="card-title">{items.hotelName}</h5>
                <p className="card-text">
                  {items.rating}
                </p>
                <button>Go somewhere</button>
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
