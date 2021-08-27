import React from 'react'
import { useCartContext } from '../../handlers/Context/CartContext'
import CartProduct from './CartProduct'
import CartForm from './CartForm'
import ShowOrder from '../ShowOrder/ShowOrder'
import './Cart.css'

const Cart = () => {

    const {Cart, removeItem, ClearItems, TotalPrice, Precio, clicksNum , handlerChange, handlerSubmit, buyer, idOrder} = useCartContext()

    console.log(buyer.name, buyer.tel, buyer.email)
    
    console.log(idOrder)

    if(Cart.length !==0){
       return(
           <div className="ContainerCart">
                <h3 className="TitleCart">Productos en el carrito</h3>
                <div className="EachItemContainer">
                {Cart.map((element)=>{
                        
                        return(
                            <div className="CartItemConatiner" key={element.item.id}>
                            <CartProduct  name={element.item.title} price={Precio(element.quantity, element.item.price)} img={element.item.image} CountItem={element.quantity} /> 
                            <button className="ButtonRemove" onClick={()=>removeItem(element.item.id)}>Remover</button>
                            </div>
                        )
                    })
                }
                    </div>
                    <h3>Total: {TotalPrice} </h3>
                    <button className="ButtonClean" onClick={()=>ClearItems()} >Limpiar carrito</button>    
                     {clicksNum ===1 ? <ShowOrder numOrder={idOrder} /> : <CartForm changes={handlerChange} submit={handlerSubmit}  name={buyer.name} tel={buyer.tel} email={buyer.email} numOrder={idOrder.value} /> }
            </div>
            
        )
    }else{
        return(<h3 className="TitleCart">Sin productos</h3>)        
    }
}

export default Cart
