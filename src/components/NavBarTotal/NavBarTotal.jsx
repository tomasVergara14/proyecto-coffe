import React from 'react'
import NavBar from '../NavBarTop/NavBar'
import NavBarBottom from '../NavBarBottom/NavBarBottom'
import './NavBarTotal.css'

const NavBarTotal = () => {
    return (
        <div className="NavTotal" >
            <NavBar/>
            <NavBarBottom/>
        </div>
    )
}

export default NavBarTotal
