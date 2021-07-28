import React, { useState} from 'react'
import './ItemCount.css'

// const stockItem = 10
// const initial = 1
const ItemCount = ({initial,stockItem}) => {

    const [onAdd, setAdd] = useState(Number(initial))  

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

    const cart = ()=>{ alert(`Esta agregando: ${onAdd} productos`) }

    
    

    return (
        
        <div >
            
            <form className="itemCount" action="">
                <div className="countButtons">
                
                    <button className="Button" type="button" onClick={rest}> - </button>
                    <p>{onAdd}</p>
                    <button className="Button" type="button" onClick={add}>+</button>
                    
                </div>
                <button className="Add" type="button" onClick={cart} >Agregar al carrito</button>    
            </form>
            
            
        </div>
    )
}

export default ItemCount
