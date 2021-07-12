import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'

const ItemList = (props) => {
    const {greeting} = props
    return (
        <div className = "ItemList" >
            <h3 className="title" > {greeting} </h3>
            <Item
            category="Coffe"/>
            
        </div>
    )
}

export default ItemList
