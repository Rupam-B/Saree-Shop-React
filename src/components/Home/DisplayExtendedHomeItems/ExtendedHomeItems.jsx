import React from 'react'
import './ExtendedHomeStyle.css'
import { FlashSaleExclusiveData } from '../FlashSaleExclusivedata'
import { Link } from 'react-router-dom'

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
      <div className="Extended-Home-items-heading-div">
        <hr />
        <div className='Extended-Home-items-heading'>
        <h3>Linen</h3>
        </div>
        <hr />
      </div>
      <div className="Extended-Home-container">
          {ExtendedHomeData.map((items) => (
            <div key={items.id} className="card Extended-Home-container-card">
              <div className="Extended-Home-container-card-img">
                <img className="card-img-top" src={items.src} alt="" />
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
              <div className="card-body Extended-Home-container-card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">Price</p>
                {/* <button className="flash-sale-container-card-body-button">Buy</button> */}
                <Link to={'/SubFinalHome'} className="Extended-Home-container-card-body-button">View Details</Link>
                
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <footer className="my-5  text-body-secondary text-center text-small">
            <p className="mb-1">© 2017–2023 Subhra Saree</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="/">Privacy</a></li>
              <li className="list-inline-item"><a href="/">Terms</a></li>
              <li className="list-inline-item"><a href="/">Support</a></li>
            </ul>
          </footer>
    </>
  )
}

export default ExtendedHomeItems