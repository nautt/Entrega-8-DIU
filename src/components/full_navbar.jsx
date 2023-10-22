import React from 'react'
import NavBar from './navbar'
import LogoUSM from '../assets/usm.png'

export const FullNavbar = () => {
  return (
    <div className='full-navbar'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={LogoUSM} height={100} alt='logo usm' style={{ marginRight: '20px' }} />
        <h1 className='page__title'>Feria de Software</h1>
      </div>
      <NavBar/>
    </div>
  )
}

export default FullNavbar
