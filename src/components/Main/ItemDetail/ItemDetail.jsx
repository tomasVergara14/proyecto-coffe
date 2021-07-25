import React from 'react'
import ItemCount from '../../itemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({name, gr,place,price,origin,height,description,img}) => {
    return (
        <div className="DetailBox" >
            <img className="ImgBox" src={img} alt="fotito" />
            <div className="DetailText" >
                <div className="DetailHeadLine" ><p>{name} </p><p>{gr} </p></div>
                <p>-{price} </p>
                <p>-{origin} </p>
                <div>{height} {description} </div>

                <ItemCount initial= "1" stockItem="5"/>

            </div>
            
        </div>
    )
}

export default ItemDetail
