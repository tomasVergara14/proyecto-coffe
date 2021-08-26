import React from 'react'
import './Item.css'



const Item = (props) => {
    
    const {name, price, img,description}= props
    return (
            <div className="itemDetail">         
                <img className="ItemImg" src={img} alt="" />
                <div className="ItemText">
                    <div><h5>Nombre: </h5><p>{name}</p> </div>
                    <div><h5>Precio: </h5><p>{price}</p> </div>
                    <div><h5>Description:</h5> <p>{description}</p>  </div>
                </div>
            </div>    
    )
}

export default Item


