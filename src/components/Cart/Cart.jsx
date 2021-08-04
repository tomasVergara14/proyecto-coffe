import React from 'react'
import { useCartContext } from '../../handlers/Context/CartContext'
import { useQuantityContext } from '../../handlers/Context/QuantityContext'
import { useProductContext } from '../../handlers/Context/ProductContext'

const Cart = () => {

    const CartDetailContext = useCartContext()
    const QuantityDetailContext = useQuantityContext()
    const ProductDetailContext = useProductContext()
    console.log(CartDetailContext)
    console.log(QuantityDetailContext)
    console.log(ProductDetailContext)

    return (
        <div>
            <h3>Cart</h3>
        </div>
    )
}

export default Cart
