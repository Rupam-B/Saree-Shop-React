import React, { useState } from 'react'
import './ExtendedHomeStyle.css'
import { FlashSaleExclusiveData } from '../FlashSaleExclusivedata'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AddFavItems } from '../../../Redux/action'

const ExtendedHomeData = FlashSaleExclusiveData

const ExtendedHomeItems = () => {
  let {id} =useParams()
  const parsedId = parseInt(id)

  const favDispatch = useDispatch();

  
  const [sendMainId] = useState(parsedId);
  const reqdata = ExtendedHomeData.find((Extitems)=>Extitems.id===parsedId)

  const [toggleFavourite, setToggleFavourite]=useState(false)
  const [favouriteId, setFavouriteId] = useState('')

  const handleFavToggle = (favid)=>{
    setFavouriteId(favid)
    setToggleFavourite(!toggleFavourite)
  }

  // const scrollToPosition =()=> {
  //   const targetY = window.scrollY + 300;
  //   window.scrollTo({
  //     top: targetY,
  //     behavior: 'smooth',
  //   });
  // }


  return (
    <>
    <div className="Extended-Home-items-main-div">
      <div className="upper-header">Hassle-Free Returns - 7 Days Easy Returns</div>
      <div className="lower-header">
      <p className="h3">MADE WITH lOVE</p>
      <p>Get 10% off (Min Shopping 2500 RS) - Coupon 'Happy10'</p>
      <p onClick={()=>{window.scrollTo(0,850)}} className="btn btn-outline-secondary btn--secondary btn--small btn--tint-border">Shop now</p>
      </div>
      <div className="Extended-Home-items-heading-div">
        <hr />
        <div className='Extended-Home-items-heading'>
        <h3>{reqdata.HomeSareeName}</h3>
        </div>
        <hr />
      </div>
      <div className="About-Extended-Home-Items">
        <p>{reqdata.About}</p>
      </div>
      <div className="Extended-Home-container">
          {reqdata.data.map((items) => (
            <div key={items.id} className="card Extended-Home-container-card">
              <div className="Extended-Home-container-card-img">
                <img className="card-img-top" src={items.src1} alt="" />
                
              </div>
              <div className="card-body Extended-Home-container-card-body">
                <h5 className="card-title Extended-Home-container-card-title">{items.SubSareeNameHome}</h5>
                <p className="card-text Extended-Home-container-card-PRICE">INR {items.Cost}.00</p>
                <Link to={`/SubFinalHome/${items.id}/${sendMainId}`} className="Extended-Home-container-card-body-button">View Details</Link>
                
              </div>
              <button onClick={()=>{
                if (toggleFavourite) {
                  handleFavToggle(items.id);
                } else {
                  favDispatch(AddFavItems(
                    items.id,
                    items.src1,
                    items.Cost
                    ,items.SubSareeNameHome));
                  handleFavToggle(items.id);
                }
              } }
                className={toggleFavourite&&favouriteId===items.id?'Extended-Home-container-card-heart-active':'Extended-Home-container-card-heart-inactive'}><i className="fa-solid fa-heart"></i></button>
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