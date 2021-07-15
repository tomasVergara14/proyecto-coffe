import React, {Component, useState, useEffect} from 'react'
import './ItemCount.css'

// const stockItem = 10
// const initial = 1
const ItemCount = (props) => {

    const {stockItem , initial } = props 
    const [onAdd, setAdd] = useState(initial)
    

    return (
        
        <div >
            
            <form className="itemCount" action="">
                <div className="countButtons">
                    <button className="Button" type="button" onClick={
                        ()=>{if(onAdd < props.stockItem){
                            setAdd(1 + onAdd )
                        }} 
                    }>+</button>
                    <p>{onAdd}</p>
                    <button className="Button" type="button" onClick={
                        ()=>{if( onAdd > props.initial ){
                            setAdd(onAdd - 1)
                        }} 
                    }> - </button>
                    
                    
                </div>
                <button className="Add" type="submit" >Agregar al carrito</button>    
            </form>
            
            
        </div>
    )
}

export default ItemCount
