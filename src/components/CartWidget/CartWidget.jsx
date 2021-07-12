import React from 'react'
import './CartWidget.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return (
        <div className="cartWidget">
            <a href="" className="navOption"><FontAwesomeIcon icon={faShoppingCart} className="cart" /></a>
            
        </div>
    )
}

export default CartWidget
