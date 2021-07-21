import React, {useState, useEffect} from 'react'
import './Item.css'



const Item = (props) => {
    
    const {name, price, description, img}= props
    return (
         
        <div className="itemDetail">           
            <div className="ItemImgContainer">
                <img className="ItemImg" src={img} alt="" />
            </div>
            <div className="itemText">
                <h3>Nombre:{name} </h3>
                <h3>Precio:{price} </h3>
                <h3>Description:{description} </h3>
            </div>
        </div>
    )
}

export default Item


