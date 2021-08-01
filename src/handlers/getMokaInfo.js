import React from 'react'
import data from '../data/CoffeProducts'

const getMokaInfo = (() => {
    const products = data
    const mokaObject = products.find(categories => categories.key ===3)
    const ProductsMokaList = mokaObject.products
    return (
        ProductsMokaList
    )
})()

export default getMokaInfo
