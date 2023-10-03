import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import './OrderExtendedStyle.css'

const OrderExtended = () => {
  const orderExtendedData = useSelector((state) => state.dispExtdOrders);
  const mainExtData = orderExtendedData.orderExtArr;

  useEffect(()=>{
    localStorage.setItem("OrderExtendedShowData", JSON.stringify(mainExtData))
  },[mainExtData])
  return (
    <>
      <div className="Order-Extended-main-div">
        <div className="Order-Extended-Sub-div">
          <div className="Order-Extended-Sub-div-first">
            <div className="Order-Extended-total-order-items">
              Total Items : <br />
             <span>{mainExtData.cart.length}</span> 
            </div>
            <div className="Order-Extended-total-order-amount">
              Total Order Amount: <br />
             <span>INR {mainExtData.total_amount}.00</span> 
            </div>
          </div>
          <div className="Order-Extended-Sub-div-second">
          {mainExtData.cart.map((iter)=>(
          <div key={iter.id} className="Order-Extended-Sub-div-section">
            <div className="Order-Extended-Sub-img-div">
              <img src={iter.imgsrc} alt="..." />
              </div>
            <span className="Order-Extended-sub-Product-details">
              {iter.ProductName}
            </span>
            <span className="Order-Extended-sub-quantity-details">
            {iter.quantity}
            </span>
            <span className="Order-Extended-sub-amount-details">
            INR {iter.Cost}.00
            </span>
            
          </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderExtended;
