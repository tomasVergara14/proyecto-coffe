import React, {useEffect, useState} from 'react'
import { useCartContext } from '../../handlers/Context/CartContext'
import { useProductContext } from '../../handlers/Context/ProductContext'
import CartProduct from './CartProduct'

const Cart = () => {

    const [cartState, setCartState] = useState([])

    const {Cart, removeItem} = useCartContext()
    const ProductDetailContext = useProductContext()

    const product = ProductDetailContext.product

    function Precio (PrecioElemento, CantidadElemento){
       return (Number(PrecioElemento) * Number(CantidadElemento))
    }

    console.log(Cart)

    useEffect(() => {
        if(Cart.length !==0){
            setCartState(
                Cart.map((element, index)=>{
                    const {id, name, price, img}=element 
                    return(
                        <div className="CartItemConatiner" key={element.item[0].id}>
                        <CartProduct  name={element.item[0].name} price={element.item[0].price} img={element.item[0].img} />
                        <p>Tienes {element.quantity} de este producto </p>
                        <p>Precio: {Precio(element.quantity, element.item[0].price)} $</p>
                        
                        
                        {/* <button onClick={removeItem(element.item[0].id)}>Remover</button> */}
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
