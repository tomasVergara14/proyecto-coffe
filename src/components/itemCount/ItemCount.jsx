import React, { useState} from 'react'
import { NavLink } from 'react-router-dom'
import './ItemCount.css'

// const stockItem = 10
// const initial = 1
const ItemCount = ({initial,stockItem}) => {
    const shopState = "Agregar al carrito"

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

    const cart = (event)=>{ 
        if (onAdd){
            setShop("Finalizar Compra")
            return(
                <div>
                    <NavLink to="/cart" ><button className="Add" type="button" onClick={cart} > {shop} </button></NavLink>
                </div>
                
            ) 
        }
     }


     const ButtonAdd = ( cart, shop)=>{
        return(
            <button className="Add" type="button" onClick={cart} > {shop} </button>
        )
    }
        
    const ButtonEnd = ( cart, shop)=>{
        return(
            <NavLink to="/cart" ><button className="Add" type="button" > {shop} </button></NavLink>
        )
    }

    return (
        
        <div >
            
            <form className="itemCount" action="">
                <div className="countButtons">
                
                    <button className="Button" type="button" onClick={rest}> - </button>
                    <p>{onAdd}</p>
                    <button className="Button" type="button" onClick={add}>+</button>
                    
                </div>
                
                {(()=>{
                    if(shop === shopState){
                        return(
                            <button className="Add" type="button" onClick={cart} > {shop} </button>
                        )
                    }
                    return(
                        <NavLink to="/cart" ><button className="Add" type="button" > {shop} </button></NavLink>
                    )
                })() }
            </form>
            
            
        </div>
    )
}

export default ItemCount
