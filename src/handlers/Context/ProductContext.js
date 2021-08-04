import React, {createContext, useContext, useState} from 'react'

export const ProductContext = createContext()
console.log(ProductContext)

export const useProductContext = ()=>useContext(ProductContext)

const ProductContextProvider = ({children})=>{

    const [ product, setProduct]= useState("hola")

    return(
        <ProductContext.Provider
        value={{
            product, 
            setProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider