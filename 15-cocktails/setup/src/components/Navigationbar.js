import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'


const Navigationbar = () => {
  return (
    <div>
      <>
      <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='cocktail db logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
    </div>
  )
}

export default Navigationbar
