import React from 'react'
import './Item.css'



const Item = (props) => {
    
    const {name, price, img}= props
    return (
            <div className="itemDetail">         
                <img className="ItemImg" src={img} alt="" />
                <div className="ItemText">
                    <p>Nombre: {name} </p>
                    <p>Precio: {price} </p>
                </div>
            </div>    
    )
}

export default Item


