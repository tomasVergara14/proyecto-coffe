import React from 'react'
import './CartProduct.css'



const CartProduct = (props) => {

    function show(e){
        
        alert('hola')
    }
    
    const {name, price, img}= props
    return (
            <div className="CartDetail">         
                <img className="CartImg" src={img} alt="" />
                <div className="CartText">
                    <p>Nombre: {name} </p>
                    <p>Precio: {price} </p>
                    
                </div>
                
            
            </div>
        
        
    )
}

export default CartProduct


