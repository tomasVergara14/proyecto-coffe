import React from 'react'
import { useCartContext } from '../../handlers/Context/CartContext'
import CartProduct from './CartProduct'

const Cart = () => {

    const {Cart, removeItem, ClearItems, TotalPrice} = useCartContext()

    function Precio (PrecioElemento, CantidadElemento){
       return (Number(PrecioElemento) * Number(CantidadElemento))
    }

    console.log(Cart)

    if(Cart.length !==0){
       return(
           <div className="ContainerCart">
                <h3 className="TitleCart">Productos en el carrito</h3>
                <div className="EachItemContainer">
                {Cart.map((element)=>{
                        
                        return(
                            <div className="CartItemConatiner" key={element.item[0].id}>
                            <CartProduct  name={element.item[0].name} price={Precio(element.quantity, element.item[0].price)} img={element.item[0].img} CountItem={element.quantity} /> 
                            <button className="ButtonRemove" onClick={()=>removeItem(element.item[0].id)}>Remover</button>
                            </div>
                        )
                    })}
                    </div>
                    <h3>Total: {TotalPrice} </h3>
                    <button className="ButtonClean" onClick={()=>ClearItems()} >Limpiar carrito</button>    
                
                
            </div>
        )
    }else{
        return(<h3 className="TitleCart">Sin productos</h3>)        
    }
}

export default Cart
