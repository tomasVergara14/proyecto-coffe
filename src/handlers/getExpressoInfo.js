import React from 'react'
import data from '../data/CoffeProducts'

const getExpressoInfo = (() => {
    const products = data
    const expressoObject = products.find(categories => categories.key ===4)
    const ProductsExpressoList = expressoObject.products
    
    return (
        ProductsExpressoList
    )
})()

export default getExpressoInfo
