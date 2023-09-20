import React from 'react'
import './ContactStyle.css'

const Contact = () => {
  const emailLocation =()=>{
    const to = 'rupam.banerje@gmail.com';
    const subject = 'Regarding Inquiry';
    const body = 'Hello,\n\nI am interested in your services.\n\nSincerely,\n[Your Name]';
    
    const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
  };

  const callLocation =()=>{
    const phoneNumber = '+917000771487'; 
      const telUrl = `tel:${phoneNumber}`;
      window.location.href = telUrl;
    };
  return (
    <>
    <div className='contact-main-div'>
    <div className=" text-secondary px-4 py-5 text-center ">
        <div className="contact-div-content">
          <h1 className="display-5 fw-bold">Contact Us</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">Subhra Saree House Opposite Shiv Parvati Talab Hemunagar <br/>Bilaspur <br/> Chhattisgarh <br/> 495001</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button onClick={callLocation} type="button" className="btn btn-outline-danger btn-lg px-4 me-sm-3 fw-bold">Call - 7566340955</button>
              <button onClick={emailLocation} type="button" className="btn btn-outline-dark btn-lg px-4">Email - saree.House@gmail.com</button>
            </div>
          </div>
        </div>
        
      </div>
      </div>
    </>
  )
}

export default Contact;