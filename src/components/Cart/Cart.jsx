import React, {useEffect, useState} from 'react'
import { useCartContext } from '../../handlers/Context/CartContext'
import { useQuantityContext } from '../../handlers/Context/QuantityContext'
import { useProductContext } from '../../handlers/Context/ProductContext'

const Cart = () => {

    const [cartState, setCartState] = useState("No hay productos en el carrito")

    const {Cart, guardarItem} = useCartContext()
    const QuantityDetailContext = useQuantityContext()
    const ProductDetailContext = useProductContext()

    const product = ProductDetailContext.product
    const quantity = QuantityDetailContext.quantity
    const cartArray = []

    console.log(Cart)


    //Ver por que no funciona
    return (
        <div>
            <h3>Cart</h3>
        </div>
    )
}

export default Cart
