import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        Página Principal
      </NavLink>
      
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/historia'
      >
        Historia
      </NavLink>

      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/auspiciadores'
      >
        Auspiciadores
      </NavLink>

      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/proy_actual'
      >
        Proyectos Actuales
      </NavLink>

      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/proy_anterior'
      >
        Proyectos Ediciones Anteriores
      </NavLink>

      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/proy_anterior'
      >
        <button type="button" class="btn btn-success">Comprar</button>
      </NavLink>
    </nav>
  )
}

export default NavBar
