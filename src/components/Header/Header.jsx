import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'></img>
        <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>About us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>

  )
}

export default Header
