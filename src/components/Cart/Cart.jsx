import React, {useEffect, useState} from 'react'
import { useCartContext } from '../../handlers/Context/CartContext'
import { useQuantityContext } from '../../handlers/Context/QuantityContext'
import { useProductContext } from '../../handlers/Context/ProductContext'
import CartProduct from './CartProduct'

const Cart = () => {

    const [cartState, setCartState] = useState([])

    const {Cart, removeItem} = useCartContext()
    const ProductDetailContext = useProductContext()

    const product = ProductDetailContext.product

    console.log(Cart)

    useEffect(() => {
        if(Cart.length !==0){
            setCartState(
                Cart.map((element, index)=>{
                    const {id, name, price, img}=element 
                    return(
                        <div className="CartItemConatiner">
                        <CartProduct key={element.product[0].id} name={element.product[0].name} price={element.product[0].price} img={element.product[0].img} />
                        <button className="RemoveButton">Remove Item</button>
                        </div>
                    )
                })
            )
        }
        console.log(cartState.length)
    }, [product])
    


    //Ver por que no funciona
    return (
        <div>
            <h3>Cart</h3>
            {cartState.length !==0 ? cartState: <p>No hay productos en el carrito</p>}
        </div>
    )
}

export default Cart
