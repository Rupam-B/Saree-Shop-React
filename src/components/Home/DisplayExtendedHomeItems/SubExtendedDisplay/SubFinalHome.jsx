import React, { useState } from 'react'
import './SubFinalStyle.css'

const SubFinalHome = () => {
    const img1 = "https://www.bharatsthali.com/cdn/shop/products/DSC8164_1800x1800.jpg?v=1634036886" 
    const img2 = "https://www.bharatsthali.com/cdn/shop/products/DSC8157_1800x1800.jpg?v=1634036896" 
    const img3 = "https://www.bharatsthali.com/cdn/shop/products/DSC8160_1800x1800.jpg?v=1634036874" 
    
    const [dispImg, setDispImg]= useState(img1)


    // const handleSetImage = (imgsrc)=>{
    //     setDispImg(imgsrc)
    // }
  return (
    <>
    <div className='Final-Home-main-div'>
        <div className="Final-Home-left-side-Img-div">
            <img src={dispImg} alt="" />
        </div>
        <div className="Final-Home-right-upper-img-div">
            <div className="right-upper-img-1">
            <img onClick={()=>setDispImg(img1)} src={img1} alt="" />
            </div>
            <div className="right-upper-img-1">
            <img onClick={()=>setDispImg(img2)} src={img2} alt="" />
            </div>
            <div className="right-upper-img-1">
            <img onClick={()=>setDispImg(img3)} src={img3} alt="" />
            </div>
        </div>
        <div className="Final-Home-Product-Details-div">
            <p className='Final-Home-Product-name'>MUSTARD YELLOW COLOR MAHESHWARI SILK HANDLOOM SAREE</p>
            <p className='Final-Home-Product-price'>Price: 450</p>
            <button className='Add-to-cart'>Add To Cart</button>

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

export default SubFinalHome