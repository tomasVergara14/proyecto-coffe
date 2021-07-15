import React, {Component, useState, useEffect} from 'react'
import './ItemCount.css'

// const stockItem = 10
// const initial = 1
const ItemCount = (props) => {

    const {initial,stockItem} = props
    const [onAdd, setAdd] = useState(Number(initial))  
    

    return (
        
        <div >
            
            <form className="itemCount" action="">
                <div className="countButtons">
                
                    <button className="Button" type="button" onClick={
                        ()=>{if( onAdd > initial ){
                            setAdd(onAdd - 1)
                        }} 
                    }> - </button>
                    <p>{onAdd}</p>
                    <button className="Button" type="button" onClick={
                        ()=>{if(!stockItem){
                            setAdd("0")
                        }else if(onAdd < stockItem  ){
                            setAdd(onAdd +1)
                        }
                    return onAdd} 
                    }>+</button>
                    
                </div>
                <button className="Add" type="button" onClick={
                    ()=>{ alert(`Esta agregando: ${onAdd} productos`) }
                } >Agregar al carrito</button>    
            </form>
            
            
        </div>
    )
}

export default ItemCount
