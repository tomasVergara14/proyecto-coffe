import React from 'react'
import './CartProduct.css'



const CartProduct = (props) => {
    
    const {name, price, img, CountItem}= props
    return (
            <div className="CartDetail">         
                <img className="CartImg" src={img} alt="Mostrar Cafe adquirido en el carrito" />
                <div className="CartText">
                    <p><h5>Nombre:</h5>  {name} </p>
                    <p><h5>Precio total:</h5>  {price} </p>
                    <p><h5>Cantidad:</h5>  {CountItem} </p>                    
                </div>                            
            </div>                
    )
}

export default CartProduct


