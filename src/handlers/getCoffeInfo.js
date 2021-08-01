import data from '../data/CoffeProducts'

const getCoffeInfo = (() => {
    const products = data
    
    const CoffeObject = products.find(categories => categories.key ===1)
    const ProductsCoffeList = CoffeObject.products
    return (
        ProductsCoffeList
    )
})()

export default getCoffeInfo
