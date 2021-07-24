import React from 'react'
import ItemCount from '../../itemCount/ItemCount';

const ItemDetail = () => {
    return (
        <div className="DetailBox" >
            <img src="" alt="fotito" />
            <div className="DetailText" >
                <div className="DetailHeadLine" ><p>Name</p><p>Gramos</p></div>
                <p>Precio</p>
                <ItemCount initial= "1" stockItem="5"/>

            </div>
            
        </div>
    )
}

export default ItemDetail
