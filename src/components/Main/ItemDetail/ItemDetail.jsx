import React from 'react'
import ItemCount from '../../itemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({name,price,description,img}) => {
    return (
        <div className="DetailBox" >
            <img className="ImgBox" src={img} alt="fotito" />
            <div className="DetailText" >
                <div className="DetailHeadLine" >{name}</div>
                <p>{price} $</p>
                <div>{description} </div>

                <ItemCount initial= "1" stockItem="5"/>
            </div>            
        </div>
    )
}

export default ItemDetail
