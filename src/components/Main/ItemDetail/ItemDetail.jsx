import React from 'react'
import ItemCount from '../../itemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({name,price,description,img}) => {
    return (
        <div className="DetailBox" >
            <img className="ImgBox" src={img} alt="" />
            <div className="DetailText" >
                <h4 className="DetailHeadLine" >{name}</h4>
                <p><h4> Price: </h4>{price} $</p>
                <div><h4>Description</h4> {description} </div>

                <ItemCount initial= "1" stockItem="5"/>
            </div>            
        </div>
    )
}

export default ItemDetail
