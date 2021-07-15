import React from 'react'
import './ItemList.css'
import Category from '../category/Category'

const ItemList = (props) => {
    const {greeting} = props
    return (
        <div className = "ItemList" >
            <h3 className="title" > {greeting} </h3>
            <Category/>
            
        </div>
    )
}

export default ItemList
