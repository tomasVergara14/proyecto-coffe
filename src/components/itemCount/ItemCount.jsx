import React, { useState} from 'react'
import { NavLink } from 'react-router-dom'
import './ItemCount.css'
import { useCartContext } from '../../handlers/Context/CartContext'
import { useQuantityContext } from '../../handlers/Context/QuantityContext'
import { useProductContext } from '../../handlers/Context/ProductContext'

const ItemCount = ({initial,stockItem}) => {
    const shopState = "Agregar al carrito"

    const {quantity,setQuantity} = useQuantityContext()
    const {guardarItem} = useCartContext()
    const { product} = useProductContext()

    const [onAdd, setAdd] = useState(Number(initial))
    const [shop, setShop] = useState(shopState)
    
    const add = ()=>{if(!stockItem){
            setAdd("0")
        }else if(onAdd < stockItem  ){
            setAdd(onAdd +1)
        }
        return onAdd}
    
    const rest = ()=>{if( onAdd > initial ){
            setAdd(onAdd - 1)
        }
    }

    const cart = ()=>{ 
        if (onAdd){
            setShop("Terminar Compra")
            setQuantity(onAdd)
            guardarItem({item:product, quantity:onAdd})
        }
     }
     console.log(quantity)

    return (
        
        <div >        
            <form className="itemCount" action="">               
                {(()=>{
                    if(shop === shopState){
                        return(
                            <>
                            <div className="countButtons">
                            
                            <button className="Button" type="button" onClick={rest}> - </button>
                            <p>{onAdd}</p>
                            <button className="Button" type="button" onClick={add}>+</button>
                                
                            </div>
                            <button className="Add" type="button" onClick={cart} > {shop} </button>                            
                            </>                            
                        )
                    }
                    return(
                        <>
                        <NavLink to="/cart" ><button className="Add" type="button" > {shop} </button></NavLink>            
                        </>                        
                    )
                })() }
            </form>      
        </div>
    )
}

export default ItemCount
