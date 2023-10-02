import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './cartStyle.css'
import { RemoveFromCart } from '../../../Redux/action'
import { AddOrder } from '../../../Redux/action'
import { EmptyCart } from '../../../Redux/action'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'


const CartDetails = () => {

  const navigate =useNavigate();

  const cartItems = useSelector((state)=>state.AddOrRemoveItems)
  
   const removeDispatch = useDispatch();
  
  
  const [isValid, setIsValid] = useState(false);
  const [fillName ,setFillName] = useState('')
  const [fillUserName,setFillUserName] = useState('')
  const [fillEmail ,setFillEmail] = useState('')
  

    // Razor Pay Setup----------
    const loadScript = (src)=>{
      return new Promise ((resolve) => {
        const script = document.createElement('script')
        script.src = src
  
        script.onload = () =>{
          resolve(true)
        }
        script.onerror = () =>{
          resolve(false)
        }
  
        document.body.appendChild(script)
      })
    }
  
    const handleFormSubmit = (event) => {
      if (!event.target.checkValidity()) {
        setIsValid(false);
        event.preventDefault();
      }
       else{  
        setIsValid(true)
        event.preventDefault();
      }
    }
    
   const displayRazorpay = async (amount)=>{
    
  
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if(!res){
      alert('You are offline... failed to load Razorpay SDK')
      return
    }
  
     
  
    const options = {
      key : 'rzp_test_raMrvMzHnIWOLu',
      currency : "INR",
      amount : amount * 100,
      name : 'Subhra Saree House',
      description : 'Thanks For Purchasing',
      image : 'https://img.perniaspopupshop.com/catalog/product/d/a/DARC0422142_1.jpg?impolicy=detailimageprod',
      
      handler : function (response) {
        
        removeDispatch(EmptyCart())
        removeDispatch(AddOrder(cartItems))
        toast.success("Order Placed Succesfully!")
        navigate('/orders')
        
      },
      prefill :{
        // name : fillDetails.newname,
        name: 'Rupam'
      }
    };
  
   const paymentObject = new window.Razorpay(options)
   paymentObject.open()
  
   }
     
    // ---------End Razorpay Setup

    useEffect(()=>{
      localStorage.setItem("localStoredSareeCart", JSON.stringify(cartItems.cart));
      localStorage.setItem("localStoredSareeAmount",JSON.stringify(cartItems.total_amount));
    },[cartItems.cart,cartItems.total_amount])
  return (
    <div className='page-container'>


        <div className='bgrnd-blk' >
          <div className=" text-center">
            <h1 className='check-out-heading' >Cart Details</h1>
          </div>
        </div>

        <div className="container pdng-tp">
          <main style={{marginBottom:'15vh'}}>
            <div className="row g-5">
              <div style={{padding:'1rem'}} className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary your-cart">Your cart</span>
                  <span className="badge bg-primary rounded-pill your-cart">{cartItems.cart.length}</span>
                </h4>
                <ul className="list-group mb-3">
                  {cartItems.cart.map((menu)=>(
                    <li key={menu.id} className="list-group-item d-flex justify-content-between lh-sm">

                    <div className='d-flex align-items-center'>
                      <img className='cart-show-img' src={menu.imgsrc} alt="" />
                      <h6 className="Product-Name my-0">{menu.ProductName}</h6>
                    </div>
                    <div className='cart-text-set d-flex'>
                    <span className="cart-cost-span"> {menu.Cost}.00 ({menu.quantity})</span>
                    <span 
                    onClick={()=>{removeDispatch(RemoveFromCart(menu.id))}} 
                    className="text-body-secondary  text-red"><i className="fa-solid cart-delete-txt-red fa-trash"></i></span>
      
                      </div>
                  </li>

                  ))}
                </ul>
                <div className="cart-total-set">
                  <h6 className="my-0">Total</h6>
                  <h6 className="my-0">INR {cartItems.total_amount}.00</h6>

                  </div>
              
              </div>
              <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Billing address</h4>
                <form 
                onSubmit={handleFormSubmit} 
                className="needs-validation">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="form-label">First name</label>
                      <input autoComplete='on' type="text" 
                      value={fillName} 
                      onChange={(e)=>setFillName(e.target.value)}
                       className="form-control" id="firstName" placeholder=""  required/>
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="lastName" className="form-label">Last name</label>
                      <input  type="text" className="form-control" id="lastName" placeholder=""  required/>
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="username" className="form-label">Username</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text">@</span>
                        <input autoComplete='on' type="text" 
                        value={fillUserName} 
                        onChange={(e)=>setFillUserName(e.target.value)}
                         className="form-control" id="username" placeholder="Username" required/>
                        <div className="invalid-feedback">
                          Your username is required.
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
                      <input autoComplete='on' type="email" 
                      value={fillEmail} 
                      onChange={(e)=>setFillEmail(e.target.value)}
                       className="form-control" id="email" placeholder="you@example.com" required/>
                      <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="address" className="form-label">Address</label>
                      <input autoComplete='on' type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
                      <div className="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>


                    <div className="col-md-5">
                      <label htmlFor="country" className="form-label">Country</label>
                      <select autoComplete='on' className="form-select" id="country" required>
                        <option>India</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="state" className="form-label">State</label>
                      <select className="form-select" id="state" required>
                        <option>Chhattisgarh</option>
                        <option>Kolkata</option>
                        <option>Pune</option>
                        <option>Andhra Pradesh</option>
                        <option>Odisa</option>
                        <option>Punjab</option>
                        <option>Madhya Pradesh</option>
                        <option>Delhi</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="zip" className="form-label">Zip</label>
                      <input  type="text" className="form-control" id="zip" placeholder="" required />
                      <div className="invalid-feedback">
                        Zip code required.
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="same-address" />
                    <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                  </div>

                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="save-info" />
                    <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                  </div>

                  <hr className="my-4" />

                  

                  <hr className="my-4" />

                  
                  
                  <button type='submit' onClick={() => {if (isValid) {displayRazorpay(cartItems.total_amount)}}} className="w-100 btn btn-primary btn-lg">Proceed to Pay <span className='cart-Check-out-span'>(INR {cartItems.total_amount}.00)</span></button>
                  {/* <button className="w-100 btn btn-primary btn-lg">Proceed to Pay <span className='cart-Check-out-span'>{cartItems.total_amount}</span></button> */}
                </form>
              </div>
            </div>
          </main>

          <hr />

          <footer className="my-5  text-body-secondary text-center text-small">
            <p className="mb-1">© 2017–2023 Subhra Saree</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="/">Privacy</a></li>
              <li className="list-inline-item"><a href="/">Terms</a></li>
              <li className="list-inline-item"><a href="/">Support</a></li>
            </ul>
          </footer>
        </div>
      </div>
  )
}

export default CartDetails