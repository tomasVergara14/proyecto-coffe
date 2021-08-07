import React from 'react'
import { useCartContext } from '../../handlers/Context/CartContext'
import CartProduct from './CartProduct'

const Cart = () => {


    const {Cart, removeItem, ClearItems} = useCartContext()


    function Precio (PrecioElemento, CantidadElemento){
       return (Number(PrecioElemento) * Number(CantidadElemento))
    }

    console.log(Cart)

    if(Cart.length !==0){
       return(
           <>
                <h3>Productos en el carrito</h3>
                {Cart.map((element, index)=>{
                    const {id, name, price, img}=element 
                    return(
                        <div className="CartItemConatiner" key={element.item[0].id}>
                        <CartProduct  name={element.item[0].name} price={Precio(element.quantity, element.item[0].price)} img={element.item[0].img} CountItem={element.quantity} /> 
                        <button onClick={()=>removeItem(element.item[0].id)}>Remover</button>
                        </div>
                    )
                })}
                <button onClick={()=>ClearItems()} >Limpiar carrito</button>
            </>
        )
    }else{
        return(<h3>No hay productos en el carrito</h3>)
        
    }

}

export default Cart
