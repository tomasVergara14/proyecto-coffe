import React from 'react'
import swal from 'sweetalert'

const showOrder = ({numOrder}) => {

    const showAlert=  ()=>{
         swal({
            title:"Ýour order N°",
            text:` Your order is ${numOrder}`,
            icon:'success'
        })
    }

    return (
        <div>
            <button onClick={showAlert}>Listo</button>
        </div>
    )
}

export default showOrder
