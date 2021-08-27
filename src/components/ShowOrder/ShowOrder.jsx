import React from 'react'
import { useCartContext } from '../../handlers/Context/CartContext'
import swal from 'sweetalert'
import './ShowOrder.css'



const ShowOrder = ({numOrder}) => {

    
const {ClearItems}= useCartContext()
    const showAlert=  ()=>{
            swal({
                title:"Ýour order N°",
                text:` Your order is ${numOrder}`,
                icon:'success',
            })
            ClearItems()
    }
    console.log(numOrder.length)
    if(numOrder.length !== 0){
        return (
            <button className="ButtonOk" onClick={showAlert}>Listo</button>   
        )
    }else{
        return(
            <h4>Preparando la compra</h4>
        )
        
    }
    
}

export default ShowOrder
