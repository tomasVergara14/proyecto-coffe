import React from 'react'
import './CartProduct.css'



const CartProduct = (props) => {
    
    const {name, price, img, CountItem}= props
    return (
            <div className="CartDetail">         
                <img className="CartImg" src={img} alt="Mostrar Cafe adquirido en el carrito" />
                <div className="CartText">
                    <div><h5>Nombre:</h5>  <p>{name}</p> </div>
                    <div><h5>Precio total:</h5>  <p>{price}</p> </div>
                    <div><h5>Cantidad:</h5>  <p>{CountItem}</p> </div>                    
                </div>                            
            </div>                
    )
}

export default CartProduct


