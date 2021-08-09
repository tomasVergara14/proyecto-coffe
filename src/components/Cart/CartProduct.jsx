import React from 'react'
import './CartProduct.css'



const CartProduct = (props) => {
    
    const {name, price, img, CountItem}= props
    return (
            <div className="CartDetail">         
                <img className="CartImg" src={img} alt="Mostrar Cafe adquirido en el carrito" />
                <div className="CartText">
                    <p>Nombre: {name} </p>
                    <p>Precio total: {price} </p>
                    <p>Cantidad: {CountItem} </p>                    
                </div>                            
            </div>                
    )
}

export default CartProduct


