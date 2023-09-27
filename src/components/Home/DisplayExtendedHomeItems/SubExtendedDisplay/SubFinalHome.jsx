import React, { useState } from 'react'
import './SubFinalStyle.css'
import { FlashSaleExclusiveData } from '../../FlashSaleExclusivedata'
import { useParams } from 'react-router-dom';

const SubHomeData = FlashSaleExclusiveData;

const SubFinalHome = () => {

 const {id, idOne} = useParams()
 const parsedid = parseInt(id)
 const parsedidOne = parseInt(idOne)

 const subReqDataFilterd = SubHomeData.find((Subitems)=>Subitems.id===parsedidOne);
 const RequiredData = subReqDataFilterd.data.find((reqItems)=>reqItems.id===parsedid);
    
    const [dispImg, setDispImg]= useState(RequiredData.src1)
  return (
    <>
    <div className='Final-Home-main-div'>
    
        <div className="Final-Home-left-side-Img-div">
            <img src={dispImg} alt="" />
        </div>
        <div className="Final-Home-right-upper-img-div">
            <div className="right-upper-img-1">
            <img onClick={()=>setDispImg(RequiredData.src1)} src={RequiredData.src1} alt="" />
            </div>
            <div className="right-upper-img-1">
            <img onClick={()=>setDispImg(RequiredData.src2)} src={RequiredData.src2} alt="" />
            </div>
            <div className="right-upper-img-1">
            <img onClick={()=>setDispImg(RequiredData.src3)} src={RequiredData.src3} alt="" />
            </div>
        </div>
        <div className="Final-Home-Product-Details-div">
            <p className='Final-Home-Product-name'>{RequiredData.SubSareeNameHome}</p>
            <p className='Final-Home-Product-price'>Price: {RequiredData.Cost}</p>
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