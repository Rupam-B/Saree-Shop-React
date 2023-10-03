import React, { useEffect } from 'react';
import './FavouriteStyle.css'
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../../../Redux/action';
import { DeleteFavItems } from '../../../Redux/action';

const Favourite = () => {
  const getFavItems = useSelector((state)=>state.FavItemsAdd)
  const receivedFavItems = getFavItems.favArr

  console.log(receivedFavItems)

  const favouriteDispatch = useDispatch();


  useEffect(()=>{
    localStorage.setItem("favLocalStoredItems", JSON.stringify(receivedFavItems))
  },[receivedFavItems])


  return (
    <>
    <div className='favourite-main-div'>
      <div className="favourite-bg-image">
        <img src="https://plus.unsplash.com/premium_photo-1671578324515-b7c3a68c0002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80" alt="" />
      </div>
      <div className="favourite-sub-div">
      {receivedFavItems.map((items) => (
            <div key={items.favid} className="card favourite-sub-container-card">
              <div className="favourite-sub-container-card-img">
                <img className="card-img-top" src={items.favimgsrc} alt="" />
                
              </div>
              <div className="card-body favourite-sub-container-card-body">
                <h5 className="card-title favourite-sub-container-card-title">{items.favProductName}</h5>
                <p className="card-text favourite-sub-container-card-PRICE">INR {items.favCost}.00</p>  
              <button onClick={()=>{favouriteDispatch(AddToCart(items.favid,items.favimgsrc,items.favCost,items.favProductName))}} className='favourite-sub-container-button' >Add to Cart</button>
              <button onClick={()=>{favouriteDispatch(DeleteFavItems(items.favid))}} className='favourite-sub-container-button-cross'><i className="fa-solid fa-xmark"></i></button>
              </div>
            </div>
          ))}
      </div>
    </div>
    </>
    
  )
}

export default Favourite;