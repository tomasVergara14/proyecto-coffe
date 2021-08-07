import React from 'react'
import { useCartContext } from '../../handlers/Context/CartContext'
import CartProduct from './CartProduct'

const Cart = () => {


    const {Cart, removeItem} = useCartContext()


    function Precio (PrecioElemento, CantidadElemento){
       return (Number(PrecioElemento) * Number(CantidadElemento))
    }

    console.log(Cart)

    if(Cart.length !==0){
       return(
           <>
                <div>Productos en el carrito</div>
                {Cart.map((element, index)=>{
                    const {id, name, price, img}=element 
                    return(
                        <div className="CartItemConatiner" key={element.item[0].id}>
                        <CartProduct  name={element.item[0].name} price={element.item[0].price} img={element.item[0].img} />
                        <p>Tienes {element.quantity} de este producto </p>
                        <p>Precio: {Precio(element.quantity, element.item[0].price)} $</p>  
                        <button onClick={()=>removeItem(element.item[0].id)}>Remover</button>
                        </div>
                    )
                })}
            </>
        )
    }else{
        return(<div>No hay productos en el carrito</div>)
        
    }

}

export default Cart
