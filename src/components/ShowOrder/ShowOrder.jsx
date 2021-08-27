import React from 'react'
import swal from 'sweetalert'
import './ShowOrder.css'

const showOrder = ({numOrder}) => {

    const showAlert=  ()=>{
            swal({
                title:"Ýour order N°",
                text:` Your order is ${numOrder}`,
                icon:'success'
            })
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

export default showOrder
