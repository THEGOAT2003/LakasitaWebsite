import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='headerContainer'>
        <nav className='nav'>
            <div className='centerHeader'> 
            <Link className='laKasita' to="/">LA KASITA <br></br> tapas y mas</Link>

            </div>  
            <div className='rightHeader'>
            <Link className='menu' to="/menu">Menu</Link>
            <Link className='whine' to="/whine">Wine</Link>
            </div>
            
        </nav>
        
    </div>
  )
}

export default Header