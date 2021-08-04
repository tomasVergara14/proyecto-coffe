import React, {useEffect, useState} from 'react'
import { useCartContext } from '../../handlers/Context/CartContext'
import { useQuantityContext } from '../../handlers/Context/QuantityContext'
import { useProductContext } from '../../handlers/Context/ProductContext'

const Cart = () => {

    const [cartState, setCartState] = useState("No hay productos en el carrito")

    const {cart, setCart} = useCartContext()
    const QuantityDetailContext = useQuantityContext()
    const ProductDetailContext = useProductContext()

    const product = ProductDetailContext.product
    const quantity = QuantityDetailContext.quantity
    const cartArray = []

    console.log(cart)
    console.log(product)
    console.log(quantity)

    console.log(cart)
    useEffect(()=>{
        setCartState(cart)
    },[ProductDetailContext])


    //Ver por que no funciona
    return (
        <div>
            <h3>Cart</h3>
            {()=>{
                if(cart){
                    return(
                        <>
                        <p>{quantity}</p>
                        <p>{cart.quantity}</p>
                        </>
                    )
                }
            }}
        </div>
    )
}

export default Cart
