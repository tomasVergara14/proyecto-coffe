import React from 'react'
import './CartWidget.css'
import { NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return (
        <div className="cartWidget">
            <NavLink to="/cart" className="navOption"><FontAwesomeIcon icon={faShoppingCart} className="cart" /></NavLink>
            
        </div>
    )
}

export default CartWidget
