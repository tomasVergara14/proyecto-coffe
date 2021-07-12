import React from 'react'
import Brand from '../Brand/Brand';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'


function NavBar() {
    return (
        <div className="Nav" >
            <Brand/>
            <CartWidget/>
        </div>
    )
}


export default NavBar;