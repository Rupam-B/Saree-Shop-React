import React from 'react'
import'./AboutStyle.css'

const About = () => {
  return (
    <>
  
    <main className="px-3 About-main-div ">
      <div className='About-bg-Overlay'></div>
      <h1 >About Us</h1>
      <p className="lead About-main-div-p" >Subhra Saree House is a whole sale as well as Retail sari Shop in Chhattisgarh, sari (sometimes also saree or shari) is a women's garment from the Indian subcontinent, that consists of an un-stitched stretch of woven fabric arranged over the body as a robe, with one end attached to the waist, while the other end rests over one shoulder as a stole (shawl), sometimes baring a part of the midriff. It may vary from 4.1 to 8.2 metres (4.5 to 9 yards) in length, and 60 to 120 centimetres (24 to 47 inches) in breadth, and is form of ethnic wear in India, Pakistan, Bangladesh, Sri Lanka, and Nepal. There are various names and styles of sari manufacture and draping, the most common being the Nivi style. The sari is worn with a fitted bodice also called a choli (ravike or kuppasa in southern India, and cholo in Nepal) and a petticoat called ghagra, parkar, or ul-pavadai. It remains fashionable in the Indian Subcontinent today.  <br/></p>
      <p className="lead About-main-div-p2">
        <button className="btn  About-main-div-button">Learn more</button>
      </p>
    </main>
  
    {/* <footer className="mt-auto text-white-50">
      <p>Subhra Saree House <a href="https://getbootstrap.com/" className="text-white">Bilaspur</a> <a href="https://twitter.com/mdo" className="text-white">, CG</a>.</p>
    </footer> */}
  </>
  )
}

export default About;