import React from 'react'
import Custom_Navbar from '../components/navbar.jsx'

import LogoSCOTIA from '../assets/scotia.png'
import LogoNTTDATA from '../assets/ntt_data.png'
import LogoUSM from '../assets/usm2.png'
import LogoSOCIALWEB from '../assets/socialWeb.png'
import LogoAPSIDE from '../assets/apside.png'
import SaltoLinea from '../assets/blanco.png'
import Footer from '../components/footer.jsx';

export const AuspiPage = () => {
  return (
    <>
      <Custom_Navbar/>
      <div className='container' style={{marginTop:"40px"}}>
        <h1 className='text-center'>Auspiciadores</h1>
        <br />
        {/* <div className="image-box" style={{ display: 'flex',justifyContent: 'center', alignItems: 'center',backgroundColor: 'white' }}>
          <img src={SaltoLinea} height={100} alt='salto de linea'/>
        </div> */}
        <div className="container-auspiciadores" style={{padding: "60px 0", backgroundColor: 'white'}}>
          <div className="image-box" style={{ display: 'flex',justifyContent: 'center', alignItems: 'center', marginBottom: "60px"}}>
            <img src={LogoSCOTIA} height={100} alt='logo scotia' style={{ marginRight: '40px' }} />
            <img src={LogoNTTDATA} height={100} alt='logo ntt data' style={{ marginRight: '40px' }} />
            <img src={LogoUSM} height={100} alt='logo usm' style={{ marginRight: '40px' }} />
          </div>
          {/* <div className="image-box" style={{ display: 'flex',justifyContent: 'center', alignItems: 'center',backgroundColor: 'white' }}>
            <img src={SaltoLinea} height={100} alt='salto de linea'/>
          </div> */}
          <div className="image-box" style={{ display: 'flex',justifyContent: 'center', alignItems: 'center',backgroundColor: 'white' }}>
            <img src={LogoSOCIALWEB} height={100} alt='logo social web' style={{ marginRight: '60px' }} />
            <img src={LogoAPSIDE} height={100} alt='logo apside' style={{ marginRight: '60px' }} />
          </div>
          {/* <div className="image-box" style={{ display: 'flex',justifyContent: 'center', alignItems: 'center',backgroundColor: 'white' }}>
            <img src={SaltoLinea} height={100} alt='salto de linea'/>
          </div> */}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default AuspiPage

