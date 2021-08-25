import React from 'react'
import './Item.css'



const Item = (props) => {
    
    const {name, price, img,description}= props
    return (
            <div className="itemDetail">         
                <img className="ItemImg" src={img} alt="" />
                <div className="ItemText">
                    <p><h5>Nombre: </h5>  {name} </p>
                    <p><h5>Precio: </h5>  {price} </p>
                    <p><h5>Description:</h5>  {description} </p>
                </div>
            </div>    
    )
}

export default Item


