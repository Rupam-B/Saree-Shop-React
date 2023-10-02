
import React, { useEffect } from 'react';
import './OrderStyle.css'
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

const Orders = () => {
      const orderReducerData =useSelector((state)=>state.AddOrderObject)

      const mapThisArr = orderReducerData.recvArr
  

      useEffect(()=>{
        localStorage.setItem("localStoredSareeOrderData" , JSON.stringify(mapThisArr))
      },[mapThisArr])
  return (
    <>
    <div className='Order-main-div'>
      <div className="order-container">
        <div className={mapThisArr.length>0?"order-heading-yes":"order-heading-No"}>
          {mapThisArr.length>0? "Your Orders" : "No Orders Yet!"}
        </div>
        {mapThisArr.map((items)=>(
        <div key={items.total_amount+Math.random()} className="order-section">
          <div className="order-img-div">
          <div className="number-of-orders"><i className="fa-solid fa-check"></i></div>
            <img src={items.cart[0].imgsrc} alt="" />
            {items.cart.length > 1 && items.cart[1].imgsrc && (
        <img src={items.cart[1].imgsrc} alt="" />
      )}
      {items.cart.length > 2 && <span className='Order-more-image-dot'> ...</span>}
          </div> 
          <div className="mobile-display-amount-order-div">
          <div className="total-Order-items">Total items : <br /><span>{items.cart.length}</span></div>
          <div className="total-order-amount">Total Amount : <br />  <span>INR {items.total_amount}.00</span> </div>
          </div>
          {/* <Link to={'/OrderExtended'} className="see-order-details"><i className="fa-solid fa-circle-arrow-right"></i></Link> */}
          <button className="see-order-details"><i className="fa-solid fa-circle-arrow-right"></i></button>
        </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Orders;