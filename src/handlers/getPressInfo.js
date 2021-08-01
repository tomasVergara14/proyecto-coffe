import React from 'react'
import data from '../data/CoffeProducts'

const getPressInfo = (() => {
    const products = data
    const pressObject = products.find(categories => categories.key ===2)
    const ProductsPressList = pressObject.products
    return (
        ProductsPressList
    )
})()


export default getPressInfo
