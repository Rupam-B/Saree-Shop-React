import React from 'react'
import './ExtendedHomeStyle.css'
import { FlashSaleExclusiveData } from '../FlashSaleExclusivedata'

const ExtendedHomeData = FlashSaleExclusiveData

const ExtendedHomeItems = () => {
  return (
    <>
    <div className="Extended-Home-items-main-div">
      <div className="upper-header">Hassle-Free Returns - 7 Days Easy Returns</div>
      <div className="lower-header">
      <p class="h3">MADE WITH lOVE</p>
      <p>Get 10% off (Min Shopping 2500 RS) - Coupon 'Happy10'</p>
      <p class="btn btn-outline-secondary btn--secondary btn--small btn--tint-border">Shop now</p>
      </div>
      <div className="Extended-Home-container">
          {ExtendedHomeData.map((items) => (
            <div key={items.id} className="card flash-sale-container-card">
              <div className="flash-sale-container-card-img">
                <div className="flash-sale-container-image-name-center">
                </div>
                <img src={items.src} alt="" />
                {/* <img
                onMouseEnter={() => handleImageChange(items.id, items.src2)}
                onMouseLeave={() => handleImageChange(items.id)}
                  src={
                    imgChange && particularimgid === items.id && particularimgChange !== undefined
                      ? particularimgChange
                      : items.src
                  }
                  className="card-img-top"
                  alt="..."
                /> */}
              </div>
              <div className="card-body flash-sale-container-card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">Price</p>
                <button className="flash-sale-container-card-body-button">Buy</button>
                {/* <Link to={'/ExtendedHomeItems'} className="flash-sale-container-card-body-button">See More</Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ExtendedHomeItems