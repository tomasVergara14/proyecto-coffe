import React from 'react'
import { useCartContext } from '../../handlers/Context/CartContext'

const Cart = () => {

    const CartDetailContext = useCartContext()
    console.log(CartDetailContext)

    return (
        <div>
            <h3>Cart</h3>
        </div>
    )
}

export default Cart
