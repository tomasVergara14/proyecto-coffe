import React from 'react'
import './ItemListContainer.css'
import Category from '../category/Category'
import ItemList from '../ItemList/ItemList'




const ItemListContainer = (props) => {
    const {greeting} = props
    return (
        <div className = "ItemList" >
            <h3 className="title" > {greeting} </h3>
            <Category/>
        </div>
    )
}

export default ItemListContainer
