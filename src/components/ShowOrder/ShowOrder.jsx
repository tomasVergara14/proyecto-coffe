import React from 'react'
import { useCartContext } from '../../handlers/Context/CartContext'
import swal from 'sweetalert'
import './ShowOrder.css'



const ShowOrder = ({numOrder}) => {

    
const {ClearItems, idOrder}= useCartContext()
    const showAlert=  ()=>{
            swal({
                title:"Codigo de compra",
                text:` ${numOrder}`,
                icon:'success',
            })
            ClearItems()
    }
    console.log(numOrder.length)
    if(numOrder.length !== 0){
        return (
            <>
            <h3>Orden de compra: {idOrder} </h3>
            <button className="ButtonOk" onClick={showAlert}>Listo</button>   
            </>
        )
    }else{
        return(
            <h4>Preparando la compra</h4>
        )
        
    }
    
}

export default ShowOrder
