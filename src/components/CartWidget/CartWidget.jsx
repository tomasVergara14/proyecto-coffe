import React from 'react'
import './CartWidget.css'
import { NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../handlers/Context/CartContext'

const CartWidget = () => {

    const {Cart,TotalItems} = useCartContext()
    
    return (
        <div className="cartWidget">
            <NavLink to="/cart" className="navOption"><FontAwesomeIcon icon={faShoppingCart} className="cart" /></NavLink>            
            {Cart.length ===0 ? <p className="TotalItems" >0</p> : <p className="TotalItems"> {TotalItems} </p> }
        </div>
    )
}

export default CartWidget
